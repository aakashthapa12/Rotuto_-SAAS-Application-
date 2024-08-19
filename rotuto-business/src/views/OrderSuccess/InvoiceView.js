import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton, CSpinner } from '@coreui/react'
import { useParams } from 'react-router-dom'
import { useGetOrderByOrderIdQuery } from '../../app/service/orderSlice'
import Page404 from '../pages/page404/Page404'
import InvoicePdf from '../../utils/InvoicePdf'

const InvoiceView = () => {
  const { Id } = useParams()

  const { data, isLoading, error } = useGetOrderByOrderIdQuery(Id)
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    if (data) {
      setOrderDetails(data)
    }
  }, [data])

  const formatAddress = ({ address, companyName, billingName }) => {
    if (
      address.line1 === '' &&
      address.line2 === '' &&
      address.city === '' &&
      address.state === '' &&
      address.postal_code === null
    ) {
      return (
        <>
          <div>{billingName}</div>
          <div>{companyName}</div>
          <div>{address.country}</div>
        </>
      )
    } else {
      return (
        <>
          <div>{companyName}</div>
          {address.line1}
          {address.line2 && <div>{address.line2}</div>}
          <div>
            {address.city}, {address.state} {address.postal_code}
          </div>
          <div>{address.country}</div>
        </>
      )
    }
  }

  if (isLoading) {
    return <CSpinner size="sm" />
  }

  if (error || !orderDetails) {
    return <Page404 />
  }

  const { orderId, orderDateTime, amount, cardType, cardLast4 } = orderDetails

  return (
    <div id="order-confirmation">
      <CRow className="justify-content-center" style={{ padding: '20px' }}>
        <CCol md="8">
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2>{`Order ID: ${orderId}`}</h2>
          </div>
          <CCard className="mb-4">
            <CCardBody>
              <h3 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Details</h3>

              <div>
                <strong>Order Date & Time:</strong> {new Date(orderDateTime).toLocaleString()}
              </div>
              <div style={{ paddingBottom: '10px' }}>
                <strong>Amount:</strong> $ {amount.toFixed(2)}
              </div>

              <CRow>
                <CCol>
                  <h4 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>
                    Payment Method
                  </h4>
                  <div>
                    <img
                      src={`https://img.icons8.com/?size=100&id=f6f4NTIAYAPC&format=png&color=000000`}
                      alt={cardType}
                      style={{ width: '24px', marginRight: '10px' }}
                    />
                    {`${cardType[0].toUpperCase() + cardType.slice(1)} ending in ${cardLast4}`}
                  </div>
                </CCol>
                <CCol>
                  <h4 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>
                    Address
                  </h4>
                  {formatAddress(orderDetails)}
                </CCol>
              </CRow>
              <h3 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Summary</h3>
              <div
                style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}
              >
                <strong>Total</strong>
                <strong>$ {amount.toFixed(2)}</strong>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                {/* <CButton color="primary" onClick={handleDownloadReceipt}>
                  Download Payment Receipt
                </CButton> */}
                <InvoicePdf orderDetails={orderDetails} />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default InvoiceView

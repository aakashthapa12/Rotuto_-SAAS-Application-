import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton, CSpinner } from '@coreui/react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useLocation } from 'react-router-dom'
import { useGetOrderBySessionIdQuery } from '../../app/service/orderSlice'
import Page404 from '../pages/page404/Page404'
import InvoicePdf from '../../utils/InvoicePdf'

const OrderConfirmationPage = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const sessionId = searchParams.get('session_id')

  const { data, isLoading, error } = useGetOrderBySessionIdQuery(sessionId)
  const [orderDetails, setOrderDetails] = useState(null)
  console.log(data)

  useEffect(() => {
    if (data) {
      setOrderDetails(data)
    }
  }, [data])

  const handleDownloadReceipt = async () => {
    const input = document.getElementById('order-confirmation')
    const canvas = await html2canvas(input)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()
    pdf.addImage(imgData, 'PNG', 0, 0)
    pdf.save(`order_confirmation_${orderDetails.orderId}.pdf`)
  }

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

  const { orderId, orderDateTime, amount, cardType, billingEmail, cardLast4 } = orderDetails

  return (
    <div id="order-confirmation">
      <CRow className="justify-content-center" style={{ padding: '20px' }}>
        <CCol md="8">
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2>Order Confirmation</h2>
            <p>{`We sent a confirmation email to ${billingEmail}. Below you will find all the information about your order.`}</p>
          </div>
          <CCard className="mb-4">
            <CCardBody>
              <h3 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Details</h3>
              <div>
                <strong>Your order number is</strong>{' '}
                <span style={{ color: '#007bff' }}>#{orderId}</span>
              </div>
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
                <InvoicePdf orderDetails={orderDetails} />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default OrderConfirmationPage

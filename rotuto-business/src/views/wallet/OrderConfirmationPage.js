// src/views/wallet/OrderConfirmationPage.js

import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'

const order = {
  orderId: '12345',
  orderDateTime: '2024-07-08T12:34:56Z',
  stripeConfirmation: 'pi_1GqIC8L9GhAqLAtQdpSnwq3M',
  ip: '192.168.1.1',
  amount: 999.0,
  paymentMode: 'Credit Card',
  cardType: 'MasterCard',
  address: {
    line1: 'Pearson Studio',
    line2: 'Rollende Landstraße 8488',
    city: 'Berlin',
    state: 'BE',
    postal_code: '10178',
    country: 'Germany',
  },
}

const OrderConfirmationPage = ({}) => {
  const { orderId, orderDateTime, stripeConfirmation, ip, amount, paymentMode, cardType, address } =
    order

  const handleDownloadReceipt = () => {
    // Implement receipt download functionality
    alert('Receipt download functionality is not implemented yet.')
  }

  return (
    <CRow className="justify-content-center" style={{ padding: '20px' }}>
      <CCol md="8">
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h2>Order Confirmation</h2>
          <p>
            We sent a confirmation email at sales@example.com. Below you will find all the
            information about your order.
          </p>
        </div>
        <CCard>
          <CCardBody>
            <h3 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>Details</h3>
            <div style={{ marginBottom: '20px' }}>
              <strong>Your order number is</strong>{' '}
              <span style={{ color: '#007bff' }}>#{orderId}</span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Order Date & Time:</strong> {new Date(orderDateTime).toLocaleString()}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Stripe Confirmation:</strong> {stripeConfirmation}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>IP:</strong> {ip}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Amount:</strong> €{amount.toFixed(2)} / mo
            </div>
            <div style={{ marginBottom: '20px', fontSize: 'small', color: 'grey' }}>
              Your plan includes 30-day free trial. Your credit card will be only charged when the
              trial period expires.
            </div>
            <CRow>
              <CCol>
                <h3 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>
                  Primary Contact
                </h3>
                <div>{address.line1}</div>
                {address.line2 && <div>{address.line2}</div>}
                <div>
                  {address.city}, {address.state} {address.postal_code}
                </div>
                <div>{address.country}</div>
              </CCol>
              <CCol>
                <h3 style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '10px' }}>
                  Payment Method
                </h3>
                <div>
                  <img
                    src={`https://img.icons8.com/color/48/000000/${cardType.toLowerCase()}-card.png`}
                    alt={cardType}
                    style={{ width: '24px', marginRight: '10px' }}
                  />
                  {cardType} ending in 4658
                </div>
                <div style={{ fontSize: 'small', color: 'grey' }}>
                  You can update your payment method later on in your customer profile.
                </div>
              </CCol>
            </CRow>
            <h3
              style={{
                borderBottom: '1px solid #dee2e6',
                paddingBottom: '10px',
                marginTop: '20px',
              }}
            >
              Summary
            </h3>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal</span>
              <span>€ {amount.toFixed(2)} / mo</span>
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>19% Tax</span>
              <span>€ {(amount * 0.19).toFixed(2)}</span>
            </div>
            <div
              style={{
                borderTop: '2px solid black',
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <strong>Total</strong>
              <strong>€ {(amount * 1.19).toFixed(2)} / mo</strong>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <CButton color="primary" onClick={handleDownloadReceipt}>
                Download Payment Receipt
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default OrderConfirmationPage

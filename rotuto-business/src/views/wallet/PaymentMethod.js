// src/views/wallet/PaymentMethod.js

import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CContainer } from '@coreui/react'
import AddPaymentMethod from './AddPaymentMethod'

const PaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      cardType: 'Visa',
      lastFourDigits: '5911',
      expires: '11/2029',
      isDefault: true,
    },
    {
      id: 2,
      cardType: 'Master',
      lastFourDigits: '5911',
      expires: '11/2029',
      isDefault: true,
    },
    {
      id: 3,
      cardType: 'Rupay',
      lastFourDigits: '5911',
      expires: '11/2029',
      isDefault: true,
    },
    // Add more payment methods as needed
  ])

  const [showAddPaymentForm, setShowAddPaymentForm] = useState(false)

  const handleAddPaymentClick = () => {
    setShowAddPaymentForm(true)
  }

  const handleCancelClick = () => {
    setShowAddPaymentForm(false)
  }

  return (
    <>
      <CContainer
        style={{
          display: 'flex',
          marginTop: '1rem',
          justifyItems: 'start',
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        {!showAddPaymentForm && (
          <>
            {paymentMethods.map((method) => (
              <CCard
                key={method.id}
                style={{
                  backgroundColor: '#f8f9fa',
                  color: '#000',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginRight: '1rem',
                  marginBottom: '1rem',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CCardHeader>
                  <img
                    src={`https://img.icons8.com/?size=100&id=f6f4NTIAYAPC&format=png&color=000000`}
                    alt={method.cardType}
                    style={{ width: '24px', marginRight: '10px' }}
                  />
                  {method.cardType} ending in {method.lastFourDigits}
                </CCardHeader>
                <CCardBody>Expires {method.expires}</CCardBody>
                <CCardFooter>
                  <CButton style={{ color: 'green', marginRight: '1rem', background: '#f8f9fa' }}>
                    Set as default
                  </CButton>
                  <CButton style={{ color: 'red', background: '#f8f9fa' }}>Delete</CButton>
                </CCardFooter>
              </CCard>
            ))}
          </>
        )}
      </CContainer>
      {!showAddPaymentForm && (
        <CButton
          color="primary"
          style={{ marginLeft: '1rem', marginBottom: '1rem' }}
          onClick={handleAddPaymentClick}
        >
          Add payment method
        </CButton>
      )}
      {showAddPaymentForm && <AddPaymentMethod onCancel={handleCancelClick} />}
    </>
  )
}

export default PaymentMethod

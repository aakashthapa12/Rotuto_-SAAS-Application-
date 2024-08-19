// src/views/wallet/AddedPaymentMethod.js

import React from 'react'
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CFormSelect,
  CFormCheck,
  CContainer,
  CRow,
  CCol,
} from '@coreui/react'

const AddPaymentMethod = ({ onCancel }) => {
  const formGroupStyle = { marginBottom: '1rem' }
  const inputStyle = { width: '100%' }
  const buttonStyle = { marginRight: '1rem' }

  return (
    <CContainer
      style={{
        maxWidth: '600px',
        // justifyItems: 'left',
        marginLeft: '0',
        marginRight: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Add payment method</h3>
      <p style={{ textAlign: 'center' }}>
        Add your credit card details below. This card will be saved to your account and can be
        removed at any time.
      </p>
      <CForm>
        <div style={formGroupStyle}>
          <CFormLabel htmlFor="cardNumber">Card information</CFormLabel>
          <CFormInput id="cardNumber" placeholder="Card number" style={inputStyle} />
        </div>
        <CRow style={formGroupStyle}>
          <CCol>
            <CFormInput id="expiryDate" placeholder="MM / YY" />
          </CCol>
          <CCol>
            <CFormInput id="cvc" placeholder="CVC" />
          </CCol>
        </CRow>
        <div style={formGroupStyle}>
          <CFormLabel htmlFor="nameOnCard">Name on card</CFormLabel>
          <CFormInput id="nameOnCard" placeholder="Name on card" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <CFormLabel htmlFor="country">Country</CFormLabel>
          <CFormSelect id="country" style={inputStyle}>
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            {/* Add more countries as needed */}
          </CFormSelect>
        </div>
        <div style={formGroupStyle}>
          <CFormLabel htmlFor="addressLine1">Address line 1</CFormLabel>
          <CFormInput id="addressLine1" placeholder="Address line 1" style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <CFormLabel htmlFor="addressLine2">Address line 2</CFormLabel>
          <CFormInput id="addressLine2" placeholder="Address line 2" style={inputStyle} />
        </div>
        <CRow style={formGroupStyle}>
          <CCol>
            <CFormInput id="city" placeholder="City" />
          </CCol>
          <CCol>
            <CFormInput id="postalCode" placeholder="Postal code" />
          </CCol>
        </CRow>
        <div style={formGroupStyle}>
          <CFormLabel htmlFor="state">State, county, province, or region</CFormLabel>
          <CFormInput
            id="state"
            placeholder="State, county, province, or region"
            style={inputStyle}
          />
        </div>
        <div style={{ ...formGroupStyle, display: 'flex', alignItems: 'center' }}>
          <CFormCheck id="defaultPayment" label="Set as default payment method" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CButton color="secondary" style={buttonStyle} onClick={onCancel}>
            Cancel
          </CButton>
          <CButton color="success">Add payment method</CButton>
        </div>
      </CForm>
    </CContainer>
  )
}

export default AddPaymentMethod

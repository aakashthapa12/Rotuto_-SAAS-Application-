// src/views/wallet/InvoicePreferences.js

import React, { useState } from 'react'
import {
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CButton,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CSpinner,
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useDispatch, useSelector } from 'react-redux'
import CountriesList from '../../utils/CountiresList'
import { useUpdateUserMutation } from '../../app/service/usersApiSlice'
import { toast } from 'react-toastify'
import { setCredentials } from '../../app/features/auth/authSlice'

const InvoicePreferences = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const [updatedUser, { isLoading }] = useUpdateUserMutation()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    businessName: userInfo.businessName,
    billingEmail: userInfo.billingDetails.email,
    country: userInfo.country,
    addressLine1: userInfo.billingDetails.line1,
    addressLine2: userInfo.billingDetails.line2,
    addressCity: userInfo.billingDetails.city,
    addressPostalCode:
      userInfo.billingDetails.postal_code === null ? '' : userInfo.billingDetails.postal_code,
    addressState: userInfo.billingDetails.state,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    try {
      const res = await updatedUser(formData).unwrap()
      toast.success('Invoice perferences updated successfully!')
      dispatch(setCredentials({ ...res }))
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <CContainer
      style={{
        marginTop: '1rem',
        maxWidth: '600px',
        marginLeft: '0',
        marginRight: 'auto',
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CCardBody>
        <h3 style={{ textAlign: 'center' }}>Invoice Preferences</h3>
        <p style={{ textAlign: 'center' }}>
          Changes to these preferences will apply to future invoices only. If you need a past
          invoice reissued, please contact hello@rotuto.com.
        </p>
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="companyName">Company name</CFormLabel>
              <CFormInput
                required
                type="text"
                id="businessName"
                placeholder="Enter company name"
                value={formData.businessName}
                onChange={handleChange}
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="billingEmail">Billing email</CFormLabel>
              <CFormInput
                required
                type="email"
                id="billingEmail"
                placeholder="Enter billing email"
                value={formData.billingEmail}
                onChange={handleChange}
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="addressLine1">Address line 1</CFormLabel>
              <CFormInput
                type="text"
                id="addressLine1"
                placeholder="Enter address line 1"
                value={formData.addressLine1}
                onChange={handleChange}
                required
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="addressLine2">Address line 2</CFormLabel>
              <CFormInput
                type="text"
                id="addressLine2"
                placeholder="Enter address line 2"
                value={formData.addressLine2}
                onChange={handleChange}
                required
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol md={6}>
              <CFormLabel htmlFor="city">City</CFormLabel>
              <CFormInput
                type="text"
                id="addressCity"
                placeholder="Enter city"
                value={formData.addressCity}
                onChange={handleChange}
                required
              />
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="postalCode">Postal code</CFormLabel>
              <CFormInput
                type="number"
                id="addressPostalCode"
                placeholder="Enter postal code"
                value={formData.addressPostalCode}
                onChange={handleChange}
                required
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="state">State</CFormLabel>
              <CFormInput
                type="text"
                id="addressState"
                placeholder="Enter state"
                value={formData.addressState}
                onChange={handleChange}
                required
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="country">Country</CFormLabel>
              <CFormSelect id="country" value={formData.country} onChange={handleChange} required>
                {CountriesList.map((countryName) => (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </CFormSelect>
            </CCol>
          </CRow>

          <CButton type="submit" color="primary" className="w-100">
            {isLoading ? <CSpinner size="sm" /> : 'Save'}
          </CButton>
        </CForm>
      </CCardBody>
    </CContainer>
  )
}

export default InvoicePreferences

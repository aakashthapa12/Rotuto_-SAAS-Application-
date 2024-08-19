import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
  CRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Forgot Password</h1>
                  <p className="text-body-secondary">
                    Enter your email, we will send you the password
                  </p>
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel htmlFor="email">Email address</CFormLabel>
                      <CFormInput type="email" id="email" placeholder="name@example.com" />
                    </CCol>
                  </CRow>
                  <div className="d-grid">
                    <CButton type="submit" color="primary">
                      Generate Password
                    </CButton>
                    <span style={{ marginTop: '10px' }}>
                      If you know your password? Contiue to <Link to={'/login'}>Sign in</Link>
                    </span>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ForgotPassword

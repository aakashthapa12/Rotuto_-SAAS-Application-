import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilBriefcase, cilGlobeAlt } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import CountiresList from '../../utils/CountiresList'
import { Link } from 'react-router-dom'
import { useUpdateUserMutation } from '../../app/service/usersApiSlice'
import { setCredentials } from '../../app/features/auth/authSlice'
import { toast } from 'react-toastify'

const Profile = () => {
  const user = useSelector((state) => state.auth.userInfo)

  const [updatedUser, { isLoading }] = useUpdateUserMutation()
  const dispatch = useDispatch()

  // Mock user data, replace with actual user data
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    businessName: user?.businessName || '',
    country: user?.country || '',
  })

  // Function to handle form submission for updating user data
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Implement logic to update user data
    try {
      const res = await updatedUser(userData).unwrap()
      dispatch(setCredentials({ ...res }))

      toast.success('Profile Updated Successfully!')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  return (
    <div className="d-flex flex-row align-items-center justify-content-left">
      <CContainer>
        <CRow className="justify-content-left">
          <CCol md={9} lg={7} xl={6}>
            <CCard>
              <CCardBody>
                <CForm onSubmit={handleSubmit}>
                  <h1>Profile</h1>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      name="name"
                      value={userData.name}
                      onChange={handleChange}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      required
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilBriefcase} />
                    </CInputGroupText>
                    <CFormInput
                      required
                      name="businessName"
                      value={userData.businessName}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilGlobeAlt} />
                    </CInputGroupText>
                    <CFormSelect
                      required
                      name="country"
                      aria-label="Country"
                      value={userData.country}
                      onChange={handleChange}
                    >
                      <option value="">Select Country</option>
                      {CountiresList.map((countryName) => (
                        <option key={countryName} value={countryName}>
                          {countryName}
                        </option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                  <div className="d-grid mb-3">
                    <CButton type="submit" color="success" disabled={isLoading}>
                      {isLoading ? <CSpinner size="sm" /> : 'Update'}
                    </CButton>
                  </div>
                  <Link to={'/dashboard'} className="no-decoration">
                    <div className="d-grid">
                      <CButton color="secondary">Cancel</CButton>
                    </div>
                  </Link>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Profile

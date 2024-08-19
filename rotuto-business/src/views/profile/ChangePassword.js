import React, { useState, useEffect } from 'react'
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
  CInputGroup,
  CInputGroupText,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import { toast } from 'react-toastify'
import { useUpdateUserMutation } from '../../app/service/usersApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../app/features/auth/authSlice'

const ChangePassword = () => {
  const dispatch = useDispatch()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    number: false,
    specialChar: false,
    uppercase: false,
    lowercase: false,
  })

  const [updatedUser, { isLoading }] = useUpdateUserMutation()

  const validatePassword = (password) => {
    const length = password.length >= 8
    const number = /[0-9]/.test(password)
    const specialChar = /[!@#$%^&*]/.test(password)
    const uppercase = /[A-Z]/.test(password)
    const lowercase = /[a-z]/.test(password)

    setPasswordValidation({ length, number, specialChar, uppercase, lowercase })
    return length && number && specialChar && uppercase && lowercase
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmNewPassword) {
      return toast.error('New Password and Confirm password are not the same')
    }

    if (currentPassword === newPassword) {
      return toast.error("Current Password and New Password can't be the same")
    }

    if (!validatePassword(newPassword)) {
      setIsPasswordFocused(true)
      return toast.error('New Password does not meet the required criteria.')
    }

    try {
      const res = await updatedUser({ currentPassword, newPassword }).unwrap()
      dispatch(setCredentials({ ...res }))
      setCurrentPassword('')
      setNewPassword('')
      setConfirmNewPassword('')
      toast.success('Password Updated Successfully!')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  useEffect(() => {
    validatePassword(newPassword)
  }, [newPassword])

  return (
    <div className="d-flex flex-row align-items-center">
      <CContainer style={{ left: '0px' }}>
        <CRow className="justify-content-left">
          <CCol md={9} lg={7} xl={6}>
            <CCard>
              <CCardBody>
                <CForm onSubmit={submitHandler}>
                  <h1>Change Password</h1>
                  <p className="text-body-secondary">Update your password</p>
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel htmlFor="currentPassword">Current Password</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          id="currentPassword"
                          placeholder="Current Password"
                          minLength={8}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel htmlFor="newPassword">New Password</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          id="newPassword"
                          placeholder="New Password"
                          minLength={8}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          onFocus={() => setIsPasswordFocused(true)}
                          onBlur={() => setIsPasswordFocused(false)}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  {isPasswordFocused && (
                    <div className="mb-3">
                      <p>Password must contain:</p>
                      <ul>
                        <li style={{ color: passwordValidation.length ? 'green' : 'red' }}>
                          At least 8 characters
                        </li>
                        <li style={{ color: passwordValidation.number ? 'green' : 'red' }}>
                          At least 1 number
                        </li>
                        <li style={{ color: passwordValidation.specialChar ? 'green' : 'red' }}>
                          At least 1 special character
                        </li>
                        <li style={{ color: passwordValidation.uppercase ? 'green' : 'red' }}>
                          At least 1 uppercase letter
                        </li>
                        <li style={{ color: passwordValidation.lowercase ? 'green' : 'red' }}>
                          At least 1 lowercase letter
                        </li>
                      </ul>
                    </div>
                  )}
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel htmlFor="confirmNewPassword">Confirm New Password</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          id="confirmNewPassword"
                          placeholder="Confirm New Password"
                          minLength={8}
                          value={confirmNewPassword}
                          onChange={(e) => setConfirmNewPassword(e.target.value)}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <div className="d-grid">
                    <CButton type="submit" color="primary" disabled={isLoading}>
                      {isLoading ? <CSpinner size="sm" /> : 'Change Password'}
                    </CButton>
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

export default ChangePassword

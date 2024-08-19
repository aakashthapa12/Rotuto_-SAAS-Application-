import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CRow,
  CFormSelect,
  CSpinner,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilLockLocked, cilBriefcase, cilGlobeAlt } from '@coreui/icons'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../../../app/service/usersApiSlice'
import { setCredentials } from '../../../app/features/auth/authSlice'
import CountiresList from '../../../utils/CountiresList'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [country, setCountry] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)

  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    number: false,
    specialChar: false,
    uppercase: false,
    lowercase: false,
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, { isLoading }] = useRegisterMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [userInfo, navigate])

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

    if (password !== repeatPassword) {
      return toast.error('Password and Confirm password are not the same.')
    }

    if (!isChecked) {
      return toast.error('Please accept terms and conditions')
    }

    if (!validatePassword(password)) {
      setIsPasswordFocused(true)
      return toast.error('Password does not meet the required criteria.')
    }

    try {
      const res = await register({
        name,
        businessName,
        country,
        email,
        password,
        role: 'user',
      }).unwrap()
      console.log(res)
      dispatch(setCredentials({ ...res }))
      toast.success('Sign up successful! Welcome to the dashboard. 🚀')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  useEffect(() => {
    validatePassword(password)
  }, [password])

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={submitHandler}>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                      required
                    />
                  </CInputGroup>
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
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Confirm Password"
                      minLength={8}
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilBriefcase} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Business Name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilGlobeAlt} />
                    </CInputGroupText>
                    <CFormSelect
                      required
                      aria-label="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Select Country</option>
                      {CountiresList.map((countryName) => (
                        <option key={countryName} value={countryName}>
                          {countryName}
                        </option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                  <CFormCheck
                    required
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="mb-4"
                    label="I agree with Privacy Policy and Terms of use"
                  />
                  <div className="d-grid mb-3">
                    <CButton color="success" type="submit" disabled={isLoading}>
                      {isLoading ? <CSpinner size="sm" /> : 'Sign Up'}
                    </CButton>
                  </div>
                  <div className="mt-3 text-center">
                    <span>Already have an account? </span>
                    <a href="/login">Sign in</a>
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

export default Register

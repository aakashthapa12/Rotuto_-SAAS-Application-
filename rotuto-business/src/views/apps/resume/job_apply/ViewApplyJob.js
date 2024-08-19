import React, { useEffect, useState } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CInputGroup,
  CInputGroupText,
  CCardHeader,
  CForm,
  CFormTextarea,
  CSpinner,
  CFormInput,
  CButton,
  CFormText,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetJobQuery } from '../../../../app/service/jobsApiSlice'
import { cilUser, cilFile, cilShareAlt } from '@coreui/icons'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'
import { useCreateApplicationMutation } from '../../../../app/service/applicationApiSlice'

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import { EmailIcon, FacebookIcon, LinkedinIcon, WhatsappIcon, XIcon } from 'react-share'

const ViewApplyJob = () => {
  let shareUrl = window.location.href

  const tempUrl = useParams()
  const navigate = useNavigate()

  const jobID = tempUrl['*'].split('/')[2]
  const temp1 = tempUrl['*'].split('/')[0]

  const x = temp1.split('-')
  const businessID = x[x.length - 1]
  const businessName = temp1.replace(`-${x[x.length - 1]}`, '').replace(/-/g, ' ')

  const recaptchaRef = React.useRef()
  const { data: jobData, isLoading, refetch, isError: jobError } = useGetJobQuery(jobID)
  const [createApplication, { isLoading: isApplying, isError }] = useCreateApplicationMutation()

  const [sampleData, setSampleData] = useState({})
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    file: null,
  })
  const [recaptchaToken, setRecaptchaToken] = useState('')
  const [shareText, setShareText] = useState('Check out this amazing opportunity!')

  useEffect(() => {
    if (jobData) {
      setSampleData({
        jobPosition: jobData.jobPosition,
        jobRequirements: jobData.jobRequirements,
        essentialSkills: jobData.essentialSkills,
        qualification: jobData.qualification,
        experience: jobData.experience,
        infoInResume: jobData.infoInResume,
        infoNotInResume: jobData.infoNotInResume,
      })
      console.log(jobData)
    }
  }, [jobData])

  useEffect(() => {
    refetch()
  }, [refetch])

  const fieldStyle = {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px 5px 0 0',
  }

  const valueStyle = {
    padding: '10px',
    borderRadius: '0 0 5px 5px',
  }

  const iconStyle = {
    cursor: 'pointer',
    margin: '0 10px',
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name == 'file') {
      setInputData({
        ...inputData,
        [name]: e.target.files[0],
      })
    } else {
      setInputData({
        ...inputData,
        [name]: value,
      })
    }
  }

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA')
      return
    }

    var inputedData = new FormData()

    inputedData.append('name', inputData.name)
    inputedData.append('email', inputData.email)
    inputedData.append('token', recaptchaToken)
    inputedData.append('jobId', jobID)
    inputedData.append('businessId', businessID)
    inputedData.append('resume', inputData.file)

    try {
      const res = await createApplication(inputedData).unwrap()
      console.log(res)
      toast.success('Application submitted successfully!')
      setTimeout(() => {
        navigate(0)
      }, 5000)
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  if (isLoading) {
    return <CSpinner size="sm" />
  }

  if (jobError) {
    return (
      <CAlert color="danger" className="d-flex align-items-center m-4">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/20/info--v1.png"
          alt="info--v1"
        />
        <span style={{ marginLeft: '1rem' }}>Please try again.</span>
      </CAlert>
    )
  }

  return (
    <CContainer className="mt-4">
      {jobData.status !== 'Active' && (
        <CAlert color="danger" className="d-flex align-items-center">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/20/info--v1.png"
            alt="info--v1"
          />
          <span style={{ marginLeft: '1rem' }}>
            {(jobData.status === 'Inactive' || jobData.status === 'Suspended') &&
              'This job is temporarily suspended. Please check back later.'}

            {jobData.status === 'Closed' &&
              'This job is closed. Applications are no longer accepted.'}
          </span>
        </CAlert>
        // <Page404 />
      )}

      <h1 className="mb-4">{businessName}</h1>
      <CRow>
        {/* Left Column - Job Details */}
        <CCol
          xs={jobData.status === 'Active' ? '12' : '0'}
          md={jobData.status === 'Active' ? '8' : '0'}
          className="mb-4"
        >
          <CCard>
            <CCardBody>
              <div
                className="container mb-4"
                style={{ backgroundColor: '#f7f9fc', padding: '20px', borderRadius: '8px' }}
              >
                <h2 style={{ color: '#343a40', marginBottom: '20px' }}>View Job</h2>
                <div className="mb-3">
                  <div style={fieldStyle}>
                    <strong style={{ color: '#495057' }}>Job Position:</strong>
                  </div>
                  <div style={valueStyle}>
                    <p style={{ margin: 0, color: '#212529' }}>{sampleData.jobPosition}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div style={fieldStyle}>
                    <strong style={{ color: '#495057' }}>Job Requirements:</strong>
                  </div>
                  <div style={valueStyle}>
                    <p style={{ margin: 0, color: '#212529' }}>{sampleData.jobRequirements}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div style={fieldStyle}>
                    <strong style={{ color: '#495057' }}>Essential Skills:</strong>
                  </div>
                  <div style={valueStyle}>
                    <p style={{ margin: 0, color: '#212529' }}>{sampleData.essentialSkills}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div style={fieldStyle}>
                    <strong style={{ color: '#495057' }}>Qualification:</strong>
                  </div>
                  <div style={valueStyle}>
                    <p style={{ margin: 0, color: '#212529' }}>{sampleData.qualification}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div style={fieldStyle}>
                    <strong style={{ color: '#495057' }}>Experience:</strong>
                  </div>
                  <div style={valueStyle}>
                    <p style={{ margin: 0, color: '#212529' }}>{sampleData.experience}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div style={fieldStyle}>
                    <strong style={{ color: '#495057' }}>
                      Information you want in the resume:
                    </strong>
                  </div>
                  <div style={valueStyle}>
                    <p style={{ margin: 0, color: '#212529' }}>{sampleData.infoInResume}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div style={fieldStyle}>
                    <strong style={{ color: '#495057' }}>
                      Information that you do not want in the resume:
                    </strong>
                  </div>
                  <div style={valueStyle}>
                    <p style={{ margin: 0, color: '#212529' }}>{sampleData.infoNotInResume}</p>
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        {/* Right Column - Public URL */}

        {jobData.status === 'Active' && (
          <CCol xs="12" md="4">
            <CCard>
              <CCardBody>
                <div>
                  <CForm onSubmit={submitHandler}>
                    <h3>Apply Job</h3>
                    <p className="text-body-secondary">
                      Fill the details and upload your resume and click on apply
                    </p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="name"
                        placeholder="Full Name"
                        value={inputData.name}
                        type="text"
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        placeholder="Email Address"
                        value={inputData.email}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-1">
                      <CInputGroupText>
                        <CIcon icon={cilFile} />
                      </CInputGroupText>
                      <CFormInput
                        type="file"
                        onChange={handleChange}
                        name="file"
                        accept=".pdf,.docx,.doc"
                        required
                      />
                    </CInputGroup>

                    <CFormText>Only PDF and Word document formats are accepted</CFormText>

                    <CInputGroup className="mb-3 mt-3">
                      <ReCAPTCHA
                        sitekey={import.meta.env.VITE_SITE_KEY}
                        ref={recaptchaRef}
                        onChange={handleRecaptchaChange}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          type="submit"
                          disabled={jobData.status !== 'Active'}
                        >
                          {isApplying ? <CSpinner size="sm" /> : 'Apply'}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </div>
              </CCardBody>
            </CCard>

            {jobData.status === 'Active' && (
              <CCard className="mt-4">
                <CCardBody>
                  <CIcon icon={cilShareAlt} style={{ marginRight: '6px' }} />
                  <strong>Share it!</strong>
                  <CFormTextarea
                    className="mt-2"
                    value={shareText}
                    onChange={(e) => setShareText(e.target.value)}
                    rows="3"
                    placeholder="Don't miss this amazing opportunity. Let's get start applying!"
                    required
                  />
                  <small>{shareText.length}/200 characters</small>
                  <br></br>
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '4px',
                      }}
                    >
                      <FacebookShareButton url={shareUrl} quote={shareText}>
                        <FacebookIcon size={32} round={true} />
                      </FacebookShareButton>

                      <TwitterShareButton url={shareUrl} title={shareText}>
                        <XIcon size={32} round={true} />
                      </TwitterShareButton>

                      <LinkedinShareButton url={shareUrl} title={shareText} summary={shareText}>
                        <LinkedinIcon size={32} round={true} />
                      </LinkedinShareButton>

                      <WhatsappShareButton url={shareUrl} title={shareText}>
                        <WhatsappIcon size={32} round={true} />
                      </WhatsappShareButton>

                      <EmailShareButton url={shareUrl} subject={shareText} body={shareText}>
                        <EmailIcon size={32} round={true} />
                      </EmailShareButton>
                    </div>
                  </div>
                </CCardBody>
              </CCard>
            )}
          </CCol>
        )}
      </CRow>
    </CContainer>
  )
}

export default ViewApplyJob

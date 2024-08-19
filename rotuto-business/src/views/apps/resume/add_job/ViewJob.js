import React, { useEffect, useState } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CContainer, CRow, CCol, CCard, CCardBody, CFormTextarea, CSpinner } from '@coreui/react'
import { Link, useParams } from 'react-router-dom'
import { useGetJobQuery } from '../../../../app/service/jobsApiSlice'
import { useSelector } from 'react-redux'

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import { EmailIcon, FacebookIcon, LinkedinIcon, WhatsappIcon, XIcon } from 'react-share'

import CIcon from '@coreui/icons-react'
import { cilShareAlt } from '@coreui/icons'

const ViewJob = () => {
  const { id } = useParams()
  const { userInfo } = useSelector((state) => state.auth)

  const { data: jobData, isLoading, refetch } = useGetJobQuery(id)

  const [sampleData, setSampleData] = useState({})
  const [shareText, setShareText] = useState('Check out this amazing opportunity!')

  useEffect(() => {
    refetch()
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
    }
  }, [jobData])

  if (isLoading) {
    return <CSpinner size="sm" />
  }

  const fieldStyle = {
    // backgroundColor: '#e0f7fa', // Light cyan background for field names
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px 5px 0 0',
  }

  const valueStyle = {
    // backgroundColor: '#f1f8e9', // Light green background for values
    padding: '10px',
    borderRadius: '0 0 5px 5px',
  }

  const iconStyle = {
    cursor: 'pointer',
    margin: '0 10px', // Add horizontal margin to each icon
  }

  const public_url = `${window.location.protocol}//${window.location.host}/prima/${userInfo?.businessName.trim().replace(/ /g, '-')}-${userInfo?.businessId}/${jobData.jobPosition.trim().replace(/ /g, '-')}/${jobData._id}`
  const shareUrl = public_url

  return (
    <CContainer className="mt-4">
      <CRow>
        {/* Left Column - Job Details */}
        <CCol xs="12" md="8 mb-4">
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
        <CCol xs="12" md="4">
          <CCard>
            <CCardBody>
              <div>
                <strong>Public URL:</strong>
                <br />{' '}
                {/* <a target="_blank" href={public_url}>
                  {public_url}
                </a>
                <br></br> */}
                <Link target="_blank" to={public_url}>
                  {public_url}
                </Link>
              </div>
            </CCardBody>
          </CCard>

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
                maxLength={200}
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
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ViewJob

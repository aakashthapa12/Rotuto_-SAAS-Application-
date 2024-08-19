import React, { useState } from 'react'
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
  CSpinner,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { usePostJobMutation } from '../../../../app/service/jobsApiSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostJob = () => {
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)
  const [postJob, { isLoading }] = usePostJobMutation()

  const [formData, setFormData] = useState({
    jobPosition: '',
    jobRequirements: '',
    essentialSkills: '',
    qualification: '',
    experience: '',
    infoInResume: '',
    infoNotInResume: '',
  })

  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible((preValue) => !preValue)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(userInfo)
    setModalVisible(true)
  }

  const createJob = async () => {
    try {
      const res = await postJob({ ...formData })
      console.log(res)
      toast.success('Job Posted Successfully! 🚀')
      navigate('/apps/resume-screening')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  const handleCancel = () => {
    setFormData({
      jobPosition: '',
      jobRequirements: '',
      essentialSkills: '',
      qualification: '',
      experience: '',
      infoInResume: '',
      infoNotInResume: '',
    })
    navigate('/apps/resume-screening')
  }

  return (
    <>
      <div className="container mb-4">
        <h2>Please add your requirements</h2>
        <CForm onSubmit={handleSubmit}>
          <div className="mb-3">
            <CFormLabel htmlFor="jobPosition">Job Position</CFormLabel>
            <CFormInput
              type="text"
              id="jobPosition"
              name="jobPosition"
              value={formData.jobPosition}
              onChange={handleChange}
              placeholder="Software Engineer..."
              required
              maxLength={70}
            />
            <small>{formData.jobPosition.length}/70 characters</small>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="jobRequirements">Job Requirements</CFormLabel>
            <CFormTextarea
              id="jobRequirements"
              name="jobRequirements"
              value={formData.jobRequirements}
              onChange={handleChange}
              rows="3"
              required
              maxLength={5000}
            />
            <small>{formData.jobRequirements.length}/5000 characters</small>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="essentialSkills">Essential Skills</CFormLabel>
            <CFormInput
              type="text"
              id="essentialSkills"
              name="essentialSkills"
              value={formData.essentialSkills}
              onChange={handleChange}
              placeholder="Python, Java, React..."
              required
              maxLength={200}
            />
            <small>{formData.essentialSkills.length}/200 characters</small>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="qualification">Qualification</CFormLabel>
            <CFormInput
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="BE / BSc / Any degree..."
              required
              maxLength={100}
            />
            <small>{formData.qualification.length}/100 characters</small>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="experience">Experience</CFormLabel>
            <CFormInput
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="0,1,2..."
              required
              maxLength={100}
            />
            <small>{formData.experience.length}/100 characters</small>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="infoInResume">Information you want in the resume</CFormLabel>
            <CFormTextarea
              id="infoInResume"
              name="infoInResume"
              value={formData.infoInResume}
              onChange={handleChange}
              rows="3"
              placeholder="He should be an expert in creating APIs with Node.js..."
              required
              maxLength={2000}
            />
            <small>{formData.infoInResume.length}/2000 characters</small>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="infoNotInResume">
              Information that you do not want in the resume
            </CFormLabel>
            <CFormTextarea
              id="infoNotInResume"
              name="infoNotInResume"
              value={formData.infoNotInResume}
              onChange={handleChange}
              rows="3"
              placeholder="He should not be from a non-tech background..."
              required
              maxLength={2000}
            />
            <small>{formData.infoNotInResume.length}/2000 characters</small>
          </div>
          <div className="d-flex justify-content-start">
            <CButton type="submit" color="primary" className="me-2">
              {isLoading ? <CSpinner size="sm" /> : 'Post Job'}
            </CButton>
            <CButton type="button" color="secondary" onClick={handleCancel}>
              Cancel
            </CButton>
          </div>
        </CForm>
      </div>

      <CModal visible={modalVisible} alignment="center" onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Confirm Job Posting</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            Kindly note that once a job is created, it cannot be edited. Would you like to proceed
            with creating this job?
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setModalVisible(false)
              createJob()
            }}
          >
            Confirm
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default PostJob

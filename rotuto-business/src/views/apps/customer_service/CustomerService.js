import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  CContainer,
  CCard,
  CRow,
  CCol,
  CCardBody,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CSpinner,
  CTabs,
  CTabList,
  CTab,
  CTabContent,
  CTabPanel,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'
import CIcon from '@coreui/icons-react'
import { cilShareAlt, cilCode } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  useDeleteFileMutation,
  useGetFilesByBusinessQuery,
  useUpdateFileMutation,
  useUploadFileMutation,
} from '../../../app/service/customerApiSlice'
import { toast } from 'react-toastify'
import Conversations from './conversations/Conversations'
import Leads from './leads/Leads'
import generateCustomerServiceScript from '.././.././../utils/GenerateScript'
import { useUpdateUserMutation } from '../../../app/service/usersApiSlice'
import { setCredentials } from '../../../app/features/auth/authSlice'

// const shareUrl = 'https://google.com'
const shareText = 'Resolve your questions here!'

const CustomerService = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [visible, setVisible] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState(null)
  const [files, setFiles] = useState([])
  const [deletingFileId, setDeletingFileId] = useState(null)

  const { data, isLoading, refetch } = useGetFilesByBusinessQuery()
  const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation()
  const [updateFile, { isLoading: isUpdating }] = useUpdateFileMutation()
  const [deleteFile] = useDeleteFileMutation()

  const [updateUser, { isLoading: isUpdatingBotName }] = useUpdateUserMutation()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  const public_url = `${window.location.protocol}//${window.location.host}/prima/${userInfo?.businessName.trim().replace(/ /g, '-')}-${userInfo?.businessId}/chat`
  const shareUrl = public_url

  const botScipt = generateCustomerServiceScript(userInfo._id)

  const [botName, setBotName] = useState(userInfo.botName)
  const [isCopied, setIsCopied] = useState(false)

  const handleSave = async () => {
    console.log(botName)
    try {
      const res = await updateUser({ botName }).unwrap()
      dispatch(setCredentials({ ...res }))

      toast.success('Bot name Updated Successfully!')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  useEffect(() => {
    refetch()
    if (data) {
      const tempFiles = data.fileList.map((file) => {
        const date = new Date(file.addedDate)
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' })
        const year = date.getFullYear()

        const formattedDate = `${day} ${month} ${year}`

        const newFile = {
          id: file._id,
          name: file.fileName,
          size: (file.fileSize / 1024).toFixed(2) + ' KB',
          date: formattedDate,
        }
        return newFile
      })
      setFiles([...tempFiles])
    }
  }, [data])

  const handleFileUpload = async (event) => {
    event.preventDefault()
    try {
      if (fileName && file) {
        const formData = new FormData()
        formData.append('fileName', fileName)
        formData.append('businessFile', file)

        if (editIndex === null) {
          await uploadFile(formData).unwrap()
          toast.success('File uploaded Successfully! 🚀')
        } else {
          const res = await updateFile({ data: formData, fileId: editIndex }).unwrap()
          console.log(res)
          if (res.status === 'success') {
            toast.success('File updated successfully')
          }
        }
      }
      setFileName('')
      setFile(null)
      setVisible(false)
      setEditIndex(null)
      refetch()
    } catch (err) {
      toast.error(err?.data?.message || err?.error || err?.message)
    }
  }

  const handleDelete = async (file) => {
    try {
      setDeletingFileId(file.id)
      await deleteFile(file.id)
      toast.success('File deleted Successfully')
      setDeletingFileId(null)
      refetch()
    } catch (error) {
      toast.error(error?.data?.message || error.error)
      setDeletingFileId(null)
    }
  }

  const updatehandler = async (file) => {
    console.log(file)
    setFileName(file.name)
    setEditIndex(file.id)
    setVisible(true)
  }

  if (isLoading) {
    return <CSpinner size="sm" />
  }

  return (
    <CContainer>
      <CTabs activeItemKey={activeTab} onChange={(key) => setActiveTab(key)}>
        <CTabList
          variant="tabs"
          layout="fill"
          style={{ display: 'flex', justifyContent: 'space-between', width: 'fit-content' }}
        >
          <CTab
            aria-controls="home-tab-pane"
            itemKey={1}
            style={
              activeTab === 1
                ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                : {}
            }
          >
            Setup
          </CTab>
          <CTab
            aria-controls="profile-tab-pane"
            itemKey={2}
            style={
              activeTab === 2
                ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                : {}
            }
          >
            Conversations
          </CTab>
          <CTab
            aria-controls="contact-tab-pane"
            itemKey={3}
            style={
              activeTab === 3
                ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                : {}
            }
          >
            Leads
          </CTab>
        </CTabList>
        <CTabContent>
          <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
            <CRow>
              <h2>Customer Service</h2>
              <CCol xs="12" md="8" className="mb-4">
                <CCard>
                  <CCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3>Files</h3>
                      <CButton
                        color="primary"
                        onClick={() => {
                          setFileName('')
                          setFile(null)
                          setVisible(true)
                        }}
                      >
                        Upload File
                      </CButton>
                    </div>

                    <CTable responsive striped hover>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell>File Name</CTableHeaderCell>
                          <CTableHeaderCell>File Size</CTableHeaderCell>
                          <CTableHeaderCell>Added Date</CTableHeaderCell>
                          <CTableHeaderCell>Actions</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {files.map((file, index) => (
                          <CTableRow key={file.id}>
                            <CTableDataCell>{file.name}</CTableDataCell>
                            <CTableDataCell>{file.size}</CTableDataCell>
                            <CTableDataCell>{file.date}</CTableDataCell>
                            <CTableDataCell>
                              <CButton
                                color="warning"
                                className="me-1"
                                size="sm"
                                onClick={() => updatehandler(file)}
                              >
                                Edit
                              </CButton>
                              <CButton
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(file)}
                                disabled={deletingFileId === file.id}
                              >
                                {deletingFileId === file.id ? <CSpinner size="sm" /> : 'Delete'}
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>

                    <CModal visible={visible} onClose={() => setVisible(false)}>
                      <CModalHeader>
                        <CModalTitle>
                          {editIndex !== null ? 'Edit File' : 'Upload File'}
                        </CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <CForm onSubmit={handleFileUpload}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="formFileName">File Name</CFormLabel>
                            <CFormInput
                              type="text"
                              id="formFileName"
                              placeholder="Enter file name"
                              value={fileName}
                              onChange={(e) => setFileName(e.target.value)}
                              minLength={3}
                              maxLength={70}
                              required
                            />
                            <small className="d-block mb-2">{`${fileName.length}/70 characters`}</small>
                          </div>

                          <div className="mb-3">
                            <CFormLabel htmlFor="formFile">File</CFormLabel>
                            <CFormInput
                              type="file"
                              id="formFile"
                              accept=".pdf,.docx,.doc"
                              onChange={(e) => setFile(e.target.files[0])}
                              required
                            />
                            <small className="d-block mb-2">
                              Only PDF and Word document formats are accepted
                            </small>
                          </div>
                          <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                              Close
                            </CButton>
                            <CButton color="primary" type="submit">
                              {isUploading || isUpdating ? (
                                <CSpinner size="sm" />
                              ) : editIndex !== null ? (
                                'Update'
                              ) : (
                                'Upload'
                              )}
                            </CButton>
                          </CModalFooter>
                        </CForm>
                      </CModalBody>
                    </CModal>
                  </CCardBody>
                </CCard>

                <CCard className="mt-4">
                  <CCardBody>
                    <div className="d-flex justify-content-between">
                      <h3>Script</h3>
                      <CopyToClipboard
                        text={botScipt}
                        onCopy={() => {
                          setIsCopied(true)
                          toast.success('Script copied')
                        }}
                      >
                        <CButton color={isCopied ? 'success' : 'primary'} className="ml-2">
                          {isCopied ? 'Copied' : 'Copy'}
                        </CButton>
                        {/* <CIcon icon={cilCopy} title="Copy Script" /> */}
                      </CopyToClipboard>
                    </div>

                    <pre>
                      <code>{botScipt}</code>
                    </pre>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol xs="12" md="4">
                <CCard className="mb-4">
                  <CCardBody>
                    <strong>Bot Name</strong>

                    <div className="d-flex justify-content-between mt-2">
                      <CFormInput
                        style={{ marginRight: '5px' }}
                        type="text"
                        value={botName}
                        maxLength={20}
                        onChange={(e) => setBotName(e.target.value)}
                        placeholder="Enter bot name"
                      />
                      <CButton color="primary" onClick={handleSave}>
                        {isUpdatingBotName ? <CSpinner size="sm" /> : 'Save'}
                      </CButton>
                    </div>
                    <small className="d-block">{`${fileName.length}/20 characters`}</small>
                  </CCardBody>
                </CCard>

                <CCard className="mb-4">
                  <CCardBody>
                    <div>
                      <strong>Public URL:</strong>
                      <br />
                      {/* <a href={public_url} target="_blank" rel="noopener noreferrer">
                        {public_url}
                      </a> */}
                      <Link target="_blank" to={public_url}>
                        {public_url}
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>

                <CCard>
                  <CCardBody>
                    <div className="d-flex align-items-center mb-2">
                      <CIcon icon={cilShareAlt} className="me-2" />
                      <strong>Share it!</strong>
                    </div>
                    <CFormTextarea
                      value={shareText}
                      onChange={(e) => setShareText(e.target.value)}
                      rows="3"
                      placeholder="Don't miss this amazing opportunity. Let's get started applying!"
                      required
                      maxLength={200}
                      className="mb-2"
                    />
                    <small className="d-block mb-2">{shareText.length}/200 characters</small>
                    <div className="d-flex justify-content-between">
                      <FacebookShareButton url={shareUrl} quote={shareText}>
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <TwitterShareButton url={shareUrl} title={shareText}>
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <LinkedinShareButton url={shareUrl} title={shareText} summary={shareText}>
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                      <WhatsappShareButton url={shareUrl} title={shareText}>
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                      <EmailShareButton url={shareUrl} subject={shareText} body={shareText}>
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CTabPanel>
          <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
            <Conversations />
          </CTabPanel>
          <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
            <Leads />
          </CTabPanel>
        </CTabContent>
      </CTabs>
    </CContainer>
  )
}

export default CustomerService

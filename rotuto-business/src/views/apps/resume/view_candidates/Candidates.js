import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CBadge,
  CButtonGroup,
  CSpinner,
} from '@coreui/react'
import {
  useGetApplicationsByJobIdQuery,
  useUpdateApplicationStatusMutation,
} from '../../../../app/service/applicationApiSlice'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const statusFilters = ['All', 'Shortlisted', 'Rejected', 'Selected']

const ApplicantsTable = () => {
  const { id } = useParams()

  const { data, isLoading, refetch } = useGetApplicationsByJobIdQuery(id)
  const [updateApplicationStatus, { isLoading: isStatusUpdating }] =
    useUpdateApplicationStatusMutation()

  const [applicants, setApplicants] = useState([])
  const [filter, setFilter] = useState('All')
  const [updatingFieldId, setUpdatingFieldId] = useState(null)

  const filteredApplicants =
    filter === 'All' ? applicants : applicants.filter((applicant) => applicant.status === filter)

  const handleAction = async (id, newStatus) => {
    setUpdatingFieldId(id)
    console.log({ id, newStatus })
    try {
      const res = await updateApplicationStatus({
        data: { status: newStatus },
        applicationId: id,
      })
      console.log(res)
      toast.success('Update Successfully! 🚀')
      setUpdatingFieldId(null)
    } catch (err) {
      toast.error(err?.data?.message || err.error)
      setUpdatingFieldId(null)
    }

    refetch()
  }

  useEffect(() => {
    refetch()
    if (data) {
      // console.log(data)
      const applicantsList = data.map((applicant) => {
        return {
          id: applicant._id,
          name: applicant.name,
          resumeLink: applicant.resume,
          status: applicant.status[1],
          summary: applicant.profileSummary,
          ranking: applicant.profileRanking,
        }
      })

      setApplicants(applicantsList)
    }
  }, [data])

  if (isLoading) {
    return <CSpinner size="sm" />
  }

  return (
    <CContainer className="">
      <CButtonGroup className="mb-3">
        {statusFilters.map((status) => (
          <CButton
            key={status}
            color={status === filter ? 'primary' : 'secondary'}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </CButton>
        ))}
      </CButtonGroup>
      <CTable hover responsive bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Applicant</CTableHeaderCell>
            <CTableHeaderCell>Profile Summary</CTableHeaderCell>
            <CTableHeaderCell>Ranking</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
            <CTableHeaderCell>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {filteredApplicants.map((applicant, index) => (
            <CTableRow key={applicant.id}>
              <CTableDataCell>{applicant.name}</CTableDataCell>

              <CTableDataCell>{applicant.summary}</CTableDataCell>

              <CTableDataCell>
                <CBadge color="success" className="ms-2">
                  {applicant.ranking}%
                </CBadge>
              </CTableDataCell>

              <CTableDataCell>
                <CBadge
                  color={
                    applicant.status === 'Selected'
                      ? 'success'
                      : applicant.status === 'Shortlisted'
                        ? 'warning'
                        : 'danger'
                  }
                >
                  {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                </CBadge>
              </CTableDataCell>

              <CTableDataCell>
                <CButtonGroup>
                  {filter !== 'All' && applicant.status === 'Selected' && (
                    <CButton
                      color="danger"
                      shape="rounded-2"
                      onClick={() => handleAction(applicant.id, 'Original')}
                      className="me-2"
                    >
                      {updatingFieldId === applicant.id ? <CSpinner size="sm" /> : 'Undo Select'}
                    </CButton>
                  )}
                  {filter !== 'All' &&
                    (applicant.status === 'Rejected' || applicant.status === 'Shortlisted') && (
                      <CButton
                        color="success"
                        shape="rounded-2"
                        disabled={updatingFieldId === applicant.id}
                        onClick={() => handleAction(applicant.id, 'Selected')}
                        className="me-2"
                      >
                        {updatingFieldId === applicant.id ? <CSpinner size="sm" /> : 'Select'}
                      </CButton>
                    )}
                  <CButton
                    color="primary"
                    shape="rounded-2"
                    href={`${applicant.resumeLink}`}
                    target="_blank"
                  >
                    Resume
                  </CButton>
                </CButtonGroup>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </CContainer>
  )
}

export default ApplicantsTable

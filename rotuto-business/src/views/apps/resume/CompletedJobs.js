import React, { useState, useEffect } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
  CBadge,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CSpinner,
  CAlert,
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Link } from 'react-router-dom'
import {
  useGetAllJobsByBusinessIdQuery,
  useUpdateJobMutation,
} from '../../../app/service/jobsApiSlice'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const CompletedJobs = () => {
  const [data, setData] = useState([])
  const { data: jobsData, isLoading, refetch } = useGetAllJobsByBusinessIdQuery()
  const [updateJob, { isLoading: updatingJob }] = useUpdateJobMutation()
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    refetch()
    if (jobsData) {
      const filteredJobs = jobsData.filter((job) => job.status === 'Closed')
      const jobsList = filteredJobs.map((job) => {
        const date = new Date(job.datePosted)
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' })
        const year = date.getFullYear()

        const formattedDate = `${day} ${month} ${year}`

        return {
          id: job._id,
          job: job.jobPosition,
          addedOn: formattedDate,
          applicants: job.applicantsNumber,
          status: job.status,
        }
      })
      setData(jobsList)
      console.log(jobsData)
    }
  }, [jobsData])

  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  if (isLoading) {
    return <CSpinner size="sm" />
  }

  return (
    <>
      <div className="App" style={{ marginTop: '1rem' }}>
        <div className="d-flex justify-content-between mb-3 mt-3">
          <div className="d-flex align-items-center">
            <span className="me-2">Show</span>
            <CFormSelect value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </CFormSelect>
            <span className="ms-2">entries</span>
          </div>
        </div>
        <CTable striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Job</CTableHeaderCell>
              <CTableHeaderCell>Job ID</CTableHeaderCell>
              <CTableHeaderCell>Added On</CTableHeaderCell>
              <CTableHeaderCell>Applicants</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
              <CTableHeaderCell>Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentRows.length === 0 && (
              <tr>
                <td colSpan="6" className="mt-2" style={{ textAlign: 'center' }}>
                  No Jobs found
                </td>
              </tr>
            )}
            {currentRows.length > 0 &&
              currentRows.map((row, index) => (
                <CTableRow key={row.id}>
                  <CTableDataCell>{row.job}</CTableDataCell>
                  <CTableDataCell>{row.id}</CTableDataCell>
                  <CTableDataCell>{row.addedOn}</CTableDataCell>
                  <CTableDataCell>
                    {row.applicants}
                    <Link to={`/apps/resume-screening/candidates/${row.id}`}>
                      <CButton color="info" size="sm" className="ms-2">
                        View
                      </CButton>
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="danger">{row.status}</CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to={`/apps/resume-screening/view-job/${row.id}`}>
                      <CButton color="info" size="sm" className="me-2">
                        View
                      </CButton>
                    </Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
        <div className="d-flex justify-content-between mt-3">
          <div>
            Showing {indexOfFirstRow + 1} to {indexOfLastRow} of {data.length} entries
          </div>
          <CPagination align="end">
            {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, i) => (
              <CPaginationItem
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </CPaginationItem>
            ))}
          </CPagination>
        </div>
      </div>
    </>
  )
}

export default CompletedJobs

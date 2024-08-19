// import React, { useState, useEffect } from 'react'
// import '@coreui/coreui/dist/css/coreui.min.css'
// import {
//   CTable,
//   CTableHead,
//   CTableBody,
//   CTableRow,
//   CTableHeaderCell,
//   CTableDataCell,
//   CButton,
//   CBadge,
//   CPagination,
//   CPaginationItem,
//   CFormSelect,
//   CSpinner,
//   CAlert,
// } from '@coreui/react'
// import '@coreui/coreui/dist/css/coreui.min.css'
// import { Link } from 'react-router-dom'
// import {
//   useGetAllJobsByBusinessIdQuery,
//   useUpdateJobMutation,
// } from '../../../app/service/jobsApiSlice'
// import { toast } from 'react-toastify'
// import { useSelector } from 'react-redux'

// const ActiveJobs = () => {
//   const { wallet } = useSelector((state) => state.wallet)

//   const [data, setData] = useState([])
//   const { data: jobsData, isLoading, refetch } = useGetAllJobsByBusinessIdQuery()
//   const [updateJob, { isLoading: updatingJob }] = useUpdateJobMutation()
//   const { userInfo } = useSelector((state) => state.auth)

//   const [closedFiledId, setClosedFiledId] = useState(null)
//   const [updateFiledId, setUpdateFiledId] = useState(null)

//   const [currentPage, setCurrentPage] = useState(1)
//   const [rowsPerPage, setRowsPerPage] = useState(5)

//   const indexOfLastRow = currentPage * rowsPerPage
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage
//   const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber)
//   }

//   const handleRowsPerPageChange = (e) => {
//     setRowsPerPage(Number(e.target.value))
//     setCurrentPage(1)
//   }

//   const jobStatusHandler = async (id, status) => {
//     setUpdateFiledId(id)
//     try {
//       const newStatus = status === 'Active' ? 'Suspended' : 'Active'
//       const res = await updateJob({ id, data: { status: newStatus } }).unwrap()
//       console.log(res)
//       refetch()
//       toast.success('Job status updated successfully! 🚀')
//       setUpdateFiledId(null)
//     } catch (err) {
//       toast.error(err?.data?.message || err.error)
//       setUpdateFiledId(null)
//     }
//   }

//   const closeJobHandler = async (id, status) => {
//     setClosedFiledId(id)
//     try {
//       const res = await updateJob({ id, data: { status: status } }).unwrap()
//       console.log(res)
//       refetch()
//       toast.success('Job status updated successfully! 🚀')
//     } catch (err) {
//       toast.error(err?.data?.message || err.error)
//     }
//   }

//   useEffect(() => {
//     refetch()
//     if (jobsData) {
//       const filteredJobs = jobsData.filter((job) => job.status !== 'Closed')
//       const jobsList = filteredJobs.map((job) => {
//         const date = new Date(job.datePosted)
//         const day = date.getDate()
//         const month = date.toLocaleString('default', { month: 'long' })
//         const year = date.getFullYear()

//         const formattedDate = `${day} ${month} ${year}`

//         return {
//           id: job._id,
//           job: job.jobPosition,
//           addedOn: formattedDate,
//           applicants: job.applicantsNumber,
//           status: wallet.balance > 0.07 ? job.status : 'Inactive',
//         }
//       })
//       setData(jobsList)
//       console.log(jobsData)
//     }
//   }, [jobsData, wallet])

//   if (isLoading) {
//     return <CSpinner size="sm" className="m-2" />
//   }

//   return (
//     <>
//       <div className="App" style={{ marginTop: '1rem' }}>
//         {wallet.balance < 0.007 && (
//           <CAlert color="danger" className="d-flex align-items-center">
//             <img
//               width="20"
//               height="20"
//               src="https://img.icons8.com/ios/20/info--v1.png"
//               alt="info--v1"
//             />
//             <span style={{ marginLeft: '1rem' }}>
//               Your current wallet balance is low. To continue using our services, please{' '}
//               <Link to="/billing">recharge</Link> your wallet to regain access.
//             </span>
//           </CAlert>
//         )}
//         <div className="d-flex justify-content-between mb-3 mt-3">
//           <div className="d-flex align-items-center">
//             <span className="me-2">Show</span>
//             <CFormSelect value={rowsPerPage} onChange={handleRowsPerPageChange}>
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//             </CFormSelect>
//             <span className="ms-2">entries</span>
//           </div>
//         </div>
//         <CTable striped hover>
//           <CTableHead>
//             <CTableRow>
//               <CTableHeaderCell>Job</CTableHeaderCell>
//               <CTableHeaderCell>Job ID</CTableHeaderCell>
//               <CTableHeaderCell>Added On</CTableHeaderCell>
//               <CTableHeaderCell>Applicants</CTableHeaderCell>
//               <CTableHeaderCell>Status</CTableHeaderCell>
//               <CTableHeaderCell>Actions</CTableHeaderCell>
//             </CTableRow>
//           </CTableHead>
//           <CTableBody>
//             {currentRows.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="mt-2" style={{ textAlign: 'center' }}>
//                   No Jobs found
//                 </td>
//               </tr>
//             )}
//             {currentRows.length > 0 &&
//               currentRows.map((row, index) => (
//                 <CTableRow key={row.id}>
//                   <CTableDataCell>{row.job}</CTableDataCell>
//                   <CTableDataCell>{row.id}</CTableDataCell>
//                   <CTableDataCell>{row.addedOn}</CTableDataCell>
//                   <CTableDataCell>
//                     {row.applicants}
//                     <Link to={`/apps/resume-screening/candidates/${row.id}`}>
//                       <CButton color="info" size="sm" className="ms-2">
//                         View
//                       </CButton>
//                     </Link>
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <CBadge color={row.status === 'Active' ? 'success' : 'warning'}>
//                       {wallet.balance < 0.007 ? 'Inactvie' : row.status}
//                     </CBadge>
//                   </CTableDataCell>
//                   <CTableDataCell>
//                     <Link to={`/apps/resume-screening/view-job/${row.id}`}>
//                       <CButton color="info" size="sm" className="me-2">
//                         View
//                       </CButton>
//                     </Link>

//                     <CButton
//                       color={row.status === 'Active' ? 'warning' : 'success'}
//                       className="me-2"
//                       size="sm"
//                       onClick={() => jobStatusHandler(row.id, row.status)}
//                       disabled={wallet.balance < 0.007}
//                     >
//                       {updateFiledId === row.id ? (
//                         <CSpinner size="sm" />
//                       ) : row.status === 'Active' ? (
//                         'Supend'
//                       ) : (
//                         'Activate'
//                       )}
//                     </CButton>

//                     <CButton
//                       color="danger"
//                       size="sm"
//                       onClick={() => closeJobHandler(row.id, 'Closed')}
//                       disabled={wallet.balance < 0.007}
//                     >
//                       {closedFiledId === row.id ? <CSpinner size="sm" /> : 'Close'}
//                     </CButton>
//                   </CTableDataCell>
//                 </CTableRow>
//               ))}
//           </CTableBody>
//         </CTable>
//         <div className="d-flex justify-content-between mt-3">
//           <div>
//             Showing {indexOfFirstRow + 1} to {indexOfLastRow} of {data.length} entries
//           </div>
//           <CPagination align="end">
//             {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, i) => (
//               <CPaginationItem
//                 key={i + 1}
//                 active={i + 1 === currentPage}
//                 onClick={() => handlePageChange(i + 1)}
//               >
//                 {i + 1}
//               </CPaginationItem>
//             ))}
//           </CPagination>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ActiveJobs

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

const ActiveJobs = () => {
  const { wallet } = useSelector((state) => state.wallet)

  const [data, setData] = useState([])
  const { data: jobsData, isLoading, refetch } = useGetAllJobsByBusinessIdQuery()
  const [updateJob, { isLoading: updatingJob }] = useUpdateJobMutation()
  const { userInfo } = useSelector((state) => state.auth)

  const [closedFiledId, setClosedFiledId] = useState(null)
  const [updateFiledId, setUpdateFiledId] = useState(null)

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

  const jobStatusHandler = async (id, status) => {
    setUpdateFiledId(id)
    try {
      const newStatus = status === 'Active' ? 'Suspended' : 'Active'
      const res = await updateJob({ id, data: { status: newStatus } }).unwrap()
      console.log(res)
      refetch()
      toast.success('Job status updated successfully! 🚀')
      setUpdateFiledId(null)
    } catch (err) {
      toast.error(err?.data?.message || err.error)
      setUpdateFiledId(null)
    }
  }

  const closeJobHandler = async (id, status) => {
    setClosedFiledId(id)
    try {
      const res = await updateJob({ id, data: { status: status } }).unwrap()
      console.log(res)
      refetch()
      toast.success('Job status updated successfully! 🚀')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  useEffect(() => {
    refetch()
    if (jobsData) {
      const filteredJobs = jobsData.filter((job) => job.status !== 'Closed')
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
          status: wallet && wallet.balance > 0.07 ? job.status : 'Inactive',
        }
      })
      setData(jobsList)
      console.log(jobsData)
    }
  }, [jobsData, wallet])

  if (isLoading) {
    return <CSpinner size="sm" className="m-2" />
  }

  return (
    <>
      <div className="App" style={{ marginTop: '1rem' }}>
        {wallet && wallet.balance < 0.007 && (
          <CAlert color="danger" className="d-flex align-items-center">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/20/info--v1.png"
              alt="info--v1"
            />
            <span style={{ marginLeft: '1rem' }}>
              Your current wallet balance is low. To continue using our services, please{' '}
              <Link to="/billing">recharge</Link> your wallet to regain access.
            </span>
          </CAlert>
        )}
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
                    <CBadge color={row.status === 'Active' ? 'success' : 'warning'}>
                      {wallet && wallet.balance < 0.007 ? 'Inactive' : row.status}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to={`/apps/resume-screening/view-job/${row.id}`}>
                      <CButton color="info" size="sm" className="me-2">
                        View
                      </CButton>
                    </Link>

                    <CButton
                      color={row.status === 'Active' ? 'warning' : 'success'}
                      className="me-2"
                      size="sm"
                      onClick={() => jobStatusHandler(row.id, row.status)}
                      disabled={wallet && wallet.balance < 0.007}
                    >
                      {updateFiledId === row.id ? (
                        <CSpinner size="sm" />
                      ) : row.status === 'Active' ? (
                        'Suspend'
                      ) : (
                        'Activate'
                      )}
                    </CButton>

                    <CButton
                      color="danger"
                      size="sm"
                      onClick={() => closeJobHandler(row.id, 'Closed')}
                      disabled={wallet && wallet.balance < 0.007}
                    >
                      {closedFiledId === row.id ? <CSpinner size="sm" /> : 'Close'}
                    </CButton>
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

export default ActiveJobs

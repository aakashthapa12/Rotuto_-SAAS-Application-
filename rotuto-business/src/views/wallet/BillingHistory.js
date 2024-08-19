// // src/views/wallet/BillingHistory.js

// import {
//   CTable,
//   CTableHead,
//   CTableRow,
//   CTableHeaderCell,
//   CTableBody,
//   CTableDataCell,
//   CPagination,
//   CPaginationItem,
//   CFormSelect,
//   CBadge,
// } from '@coreui/react'
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// const BillingHistory = () => {
//   const { wallet } = useSelector((state) => state.wallet)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage, setItemsPerPage] = useState(5)

//   // Pagination logic
//   const totalPages = Math.ceil(wallet.orders.length / itemsPerPage)
//   const currentOrders = wallet.orders.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage,
//   )

//   // Handle change in rows per page
//   const handleRowsPerPageChange = (e) => {
//     setItemsPerPage(Number(e.target.value))
//     setCurrentPage(1) // Reset to the first page
//   }

//   // Function to render status badge
//   const renderStatusBadge = (status) => {
//     let color = 'secondary'
//     return <CBadge color={color}>{status}</CBadge>
//   }

//   return (
//     <div style={{ marginTop: '1rem' }}>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '1rem',
//         }}
//       >
//         <h5>Billing History</h5>
//         <CFormSelect
//           style={{ width: 'auto' }}
//           value={itemsPerPage}
//           onChange={handleRowsPerPageChange}
//         >
//           <option value={5}>5 rows</option>
//           <option value={10}>10 rows</option>
//           <option value={15}>15 rows</option>
//           <option value={20}>20 rows</option>
//         </CFormSelect>
//       </div>
//       <CTable responsive className="table table-striped" style={{ marginBottom: '1rem' }}>
//         <CTableHead>
//           <CTableRow>
//             <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
//             <CTableHeaderCell scope="col">Created</CTableHeaderCell>
//             <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
//             <CTableHeaderCell scope="col">Status</CTableHeaderCell>
//             <CTableHeaderCell scope="col">Invoice</CTableHeaderCell>
//           </CTableRow>
//         </CTableHead>
//         <CTableBody>
//           {currentOrders.map((item, index) => (
//             <CTableRow key={index}>
//               <CTableDataCell>{item.orderId}</CTableDataCell>
//               <CTableDataCell>{new Date(item.createdAt).toLocaleString()}</CTableDataCell>
//               <CTableDataCell>${item.amount.toFixed(2)}</CTableDataCell>
//               <CTableDataCell>{renderStatusBadge(item.status)}</CTableDataCell>
//               <CTableDataCell>
//                 <Link to={`/orders/${item.orderId}`}>View</Link>
//               </CTableDataCell>
//             </CTableRow>
//           ))}
//         </CTableBody>
//       </CTable>
//       <CPagination aria-label="Page navigation example" style={{ justifyContent: 'center' }}>
//         <CPaginationItem
//           aria-label="Previous"
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//         >
//           <span aria-hidden="true">&laquo;</span>
//         </CPaginationItem>
//         {Array.from({ length: totalPages }).map((_, idx) => (
//           <CPaginationItem
//             key={idx}
//             active={currentPage === idx + 1}
//             onClick={() => setCurrentPage(idx + 1)}
//           >
//             {idx + 1}
//           </CPaginationItem>
//         ))}
//         <CPaginationItem
//           aria-label="Next"
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//         >
//           <span aria-hidden="true">&raquo;</span>
//         </CPaginationItem>
//       </CPagination>
//     </div>
//   )
// }

// export default BillingHistory

import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CBadge,
} from '@coreui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BillingHistory = () => {
  const { wallet } = useSelector((state) => state.wallet)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Check if wallet.orders is defined and is an array
  const orders = wallet?.orders || []

  // Pagination logic
  const totalPages = Math.ceil(orders.length / itemsPerPage)
  const currentOrders = orders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle change in rows per page
  const handleRowsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1) // Reset to the first page
  }

  // Function to render status badge
  const renderStatusBadge = (status) => {
    let color = 'secondary'
    return <CBadge color={color}>{status}</CBadge>
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <h5>Billing History</h5>
        <CFormSelect
          style={{ width: 'auto' }}
          value={itemsPerPage}
          onChange={handleRowsPerPageChange}
        >
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={15}>15 rows</option>
          <option value={20}>20 rows</option>
        </CFormSelect>
      </div>
      <CTable responsive className="table table-striped" style={{ marginBottom: '1rem' }}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Created</CTableHeaderCell>
            <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Invoice</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentOrders.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{item.orderId}</CTableDataCell>
              <CTableDataCell>{new Date(item.createdAt).toLocaleString()}</CTableDataCell>
              <CTableDataCell>${item.amount.toFixed(2)}</CTableDataCell>
              <CTableDataCell>{renderStatusBadge(item.status)}</CTableDataCell>
              <CTableDataCell>
                <Link to={`/orders/${item.orderId}`}>View</Link>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <CPagination aria-label="Page navigation example" style={{ justifyContent: 'center' }}>
        <CPaginationItem
          aria-label="Previous"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <CPaginationItem
            key={idx}
            active={currentPage === idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </CPaginationItem>
        ))}
        <CPaginationItem
          aria-label="Next"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </div>
  )
}

export default BillingHistory

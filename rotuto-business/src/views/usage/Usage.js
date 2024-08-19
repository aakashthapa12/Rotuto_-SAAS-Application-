import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CSpinner,
  CTooltip,
  CButton,
  CBadge,
  CPagination,
  CPaginationItem,
  CFormSelect,
} from '@coreui/react'
import { useGetUsageQuery } from '../../app/service/orderSlice'
import { useSelector } from 'react-redux'

const SampleTable = () => {
  const { wallet } = useSelector((state) => state.wallet)
  console.log(wallet)
  const [usageData, setUsageData] = useState([])
  const { data, isLoading, error, refetch } = useGetUsageQuery()

  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = usageData ? usageData.slice(indexOfFirstRow, indexOfLastRow) : []

  useEffect(() => {
    refetch()
    if (data) {
      const usageList = data.map((item) => {
        const date = new Date(item.createdAt)
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' })
        const year = date.getFullYear()

        const formattedTime = date.toLocaleTimeString()
        const formattedDate = `${day} ${month} ${year} ${formattedTime}`

        return {
          id: item._id,
          agentType: item.agentType,
          createdAt: formattedDate,
          chargeAmount: item.chargeAmount,
          referenceId: item.referenceId,
        }
      })
      setUsageData(usageList)
    }
  }, [data, refetch])

  if (isLoading) {
    return <CSpinner sm="sm" />
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  return (
    <>
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
      <CTable responsive className="table table-striped">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">
              Reference No{' '}
              <CTooltip
                placement="right"
                content="The reference number is based on agent type: Application ID for resume screening, Booking ID for appointment booking, and Session ID for customer service."
              >
                <img
                  width="12"
                  height="12"
                  src="https://img.icons8.com/ios/20/info--v1.png"
                  alt="info--v1"
                />
              </CTooltip>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">Agent Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
            <CTableHeaderCell scope="col">Charged Amount</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {currentRows.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{item.referenceId}</CTableDataCell>
              <CTableDataCell>{item.agentType}</CTableDataCell>
              <CTableDataCell>{item.createdAt}</CTableDataCell>
              <CTableDataCell>$ {item.chargeAmount}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <div className="d-flex justify-content-between mt-3">
        <div>
          Showing {indexOfFirstRow + 1} to {indexOfLastRow} of {usageData.length} entries
        </div>
        <CPagination align="end">
          {Array.from({ length: Math.ceil(usageData.length / rowsPerPage) }, (_, i) => (
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
    </>
  )
}

export default SampleTable

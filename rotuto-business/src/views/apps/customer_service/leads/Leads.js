import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CFormSelect,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

import { format } from 'date-fns'
import LeadDetails from './LeadDetails'

// Sample data
const sampleLeads = [
  { date: '2024-06-01', leads: 5 },
  { date: '2024-06-02', leads: 3 },
  { date: '2024-06-03', leads: 8 },
  { date: '2024-06-04', leads: 12 },
  { date: '2024-06-05', leads: 15 },
  { date: '2024-07-01', leads: 4 },
  { date: '2024-07-02', leads: 6 },
  { date: '2024-07-03', leads: 9 },
  { date: '2024-07-04', leads: 10 },
  { date: '2024-07-05', leads: 2 },
]

const Leads = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-06')
  const [selectedDate, setSelectedDate] = useState(null)

  // Handle month change
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value)
    setSelectedDate(null) // Reset selected date when month changes
  }

  // Handle click on View action
  const handleViewLeadDetails = (date) => {
    setSelectedDate(date)
  }

  // Back to Leads table
  const handleBack = () => {
    setSelectedDate(null)
  }

  // Filter leads by selected month
  const filteredLeads = sampleLeads.filter((lead) => lead.date.startsWith(selectedMonth))

  return (
    <div>
      <CRow className="mb-3">
        <CCol md={4} className="d-flex align-items-center">
          <span className="me-2">Month</span>
          <CFormSelect value={selectedMonth} onChange={handleMonthChange} style={{ width: 'auto' }}>
            {['2024-06', '2024-07'].map((month) => (
              <option key={month} value={month}>
                {format(new Date(month), 'MMMM yyyy')}
              </option>
            ))}
          </CFormSelect>
        </CCol>
      </CRow>

      {!selectedDate ? (
        <CTable responsive="sm" striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Date</CTableHeaderCell>
              <CTableHeaderCell>Leads</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredLeads.map((lead, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{lead.date}</CTableDataCell>
                <CTableDataCell>{lead.leads}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" onClick={() => handleViewLeadDetails(lead.date)}>
                    View Details
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      ) : (
        <LeadDetails date={selectedDate} onBack={handleBack} />
      )}
    </div>
  )
}

export default Leads

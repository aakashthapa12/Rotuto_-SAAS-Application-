import React, { useState } from 'react'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
  CFormSelect,
  CCol,
  CRow,
} from '@coreui/react'
import { format } from 'date-fns'
import ConversationDetails from './DataWiseConversations'

// Sample data
const sampleConversations = [
  { date: '2024-06-01', number: 5 },
  { date: '2024-06-02', number: 3 },
  { date: '2024-06-03', number: 8 },
  { date: '2024-06-04', number: 12 },
  { date: '2024-06-05', number: 15 },
  { date: '2024-06-06', number: 7 },
  { date: '2024-06-07', number: 11 },
  { date: '2024-06-08', number: 9 },
  { date: '2024-07-01', number: 4 },
  { date: '2024-07-02', number: 6 },
  { date: '2024-07-03', number: 9 },
  { date: '2024-07-04', number: 10 },
  { date: '2024-07-05', number: 2 },
  { date: '2024-07-06', number: 3 },
  { date: '2024-07-07', number: 8 },
  { date: '2024-07-08', number: 5 },
]

const Conversations = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-06')
  const [selectedDate, setSelectedDate] = useState(null)

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value)
    setSelectedDate(null) // Reset selected date whenever month changes
  }

  const handleViewDetails = (date) => {
    setSelectedDate(date)
  }

  const filteredConversations = sampleConversations.filter((conversation) =>
    conversation.date.startsWith(selectedMonth),
  )

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
      {selectedDate ? (
        <ConversationDetails date={selectedDate} onBack={() => setSelectedDate(null)} />
      ) : (
        <CTable responsive="sm" striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Date</CTableHeaderCell>
              <CTableHeaderCell>Conversations</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredConversations.map((conversation, index) => (
              <CTableRow key={index}>
                <CTableDataCell>
                  {format(new Date(conversation.date), 'dd MMM yyyy')}
                </CTableDataCell>
                <CTableDataCell>{conversation.number}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" onClick={() => handleViewDetails(conversation.date)}>
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      )}
    </div>
  )
}

export default Conversations

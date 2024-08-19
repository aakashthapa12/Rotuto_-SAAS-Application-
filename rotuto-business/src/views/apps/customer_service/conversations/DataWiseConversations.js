import React, { useState } from 'react'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react'
import { format } from 'date-fns'

import ChatView from './ChatView'

const sampleConversationDetails = {
  '2024-06-01': [
    { id: 1, time: '10:00 AM' },
    { id: 2, time: '11:00 AM' },
    { id: 3, time: '01:00 PM' },
    { id: 4, time: '02:00 PM' },
    { id: 5, time: '03:00 PM' },
  ],
  '2024-06-02': [
    { id: 6, time: '09:00 AM' },
    { id: 7, time: '10:00 AM' },
    { id: 8, time: '11:00 AM' },
  ],
  '2024-06-03': [
    { id: 9, time: '08:00 AM' },
    { id: 10, time: '09:00 AM' },
    { id: 11, time: '10:00 AM' },
    { id: 12, time: '11:00 AM' },
    { id: 13, time: '12:00 PM' },
    { id: 14, time: '01:00 PM' },
    { id: 15, time: '02:00 PM' },
    { id: 16, time: '03:00 PM' },
  ],
}

const ConversationDetails = ({ date, onBack }) => {
  const [selectedChatId, setSelectedChatId] = useState(null)
  const details = sampleConversationDetails[date] || []

  if (selectedChatId) {
    return <ChatView id={selectedChatId} onBack={() => setSelectedChatId(null)} />
  }

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <h4>Conversation Details for {format(new Date(date), 'dd MMMM yyyy')}</h4>
        <CButton color="secondary" onClick={onBack}>
          Back
        </CButton>
      </CCardHeader>
      <CCardBody>
        <CTable responsive="sm" striped hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Time</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {details.map((detail) => (
              <CTableRow key={detail.id}>
                <CTableDataCell>{detail.id}</CTableDataCell>
                <CTableDataCell>{detail.time}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" onClick={() => setSelectedChatId(detail.id)}>
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default ConversationDetails

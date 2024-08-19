import React from 'react'
import {
  CTable,
  CTableBody,
  CCard,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CTableDataCell,
  CButton,
} from '@coreui/react'

import { format } from 'date-fns'

// Sample data
const sampleLeadDetails = {
  '2024-06-01': [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1-123-456-7890',
      message: 'Interested in your product offerings.',
      time: '10:00 AM',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1-234-567-8901',
      message: 'Inquiry about pricing.',
      time: '11:00 AM',
    },
  ],
  '2024-06-02': [
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      phone: '+1-345-678-9012',
      message: 'Looking for product specifications.',
      time: '09:00 AM',
    },
  ],
  // Add more sample data as needed
}

const LeadDetails = ({ date, onBack }) => {
  const leadDetails = sampleLeadDetails[date] || []

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <h4> Details for {format(new Date(date), 'dd MMMM yyyy')}</h4>
        <CButton color="secondary" onClick={onBack}>
          Back
        </CButton>
      </CCardHeader>
      <div>
        <CTable responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>Phone Number</CTableHeaderCell>
              <CTableHeaderCell>Message</CTableHeaderCell>
              <CTableHeaderCell>Time</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {leadDetails.map((lead) => (
              <CTableRow key={lead.id}>
                <CTableDataCell>{lead.id}</CTableDataCell>
                <CTableDataCell>{lead.name}</CTableDataCell>
                <CTableDataCell>{lead.email}</CTableDataCell>
                <CTableDataCell>{lead.phone}</CTableDataCell>
                <CTableDataCell>{lead.message}</CTableDataCell>
                <CTableDataCell>{lead.time}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    </CCard>
  )
}

export default LeadDetails

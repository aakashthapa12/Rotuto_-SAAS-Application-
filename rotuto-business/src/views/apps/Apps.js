import React, { useState } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CCardBody,
  CContainer,
  CRow,
  CCol,
} from '@coreui/react'

import Widget from '../widgets/Widget'

const AppsPage = () => {
  // Sample data
  const [activeAgents, setActiveAgents] = useState([]) // No active agents
  const allAgents = [
    { id: 1, name: 'Customer Service Agent', color: 'primary' },
    { id: 2, name: 'Appointment Booking Agent', color: 'info' },
    { id: 3, name: 'Resume Screening Agent', color: 'warning' },
  ]

  const addAgent = (item) => {
    let isAddable = true
    setActiveAgents((pre) => {
      pre.forEach((i) => {
        if (i.id == item.id) {
          isAddable = false
        }
      })
      return isAddable ? [...pre, item] : [...pre]
    })
  }

  return (
    <CContainer>
      <CRow>
        <CCol>
          <h2>Active Agents</h2>
          <CCardBody>
            {activeAgents.length > 0 ? (
              <Widget className="mb-4" activeAgents={activeAgents} />
            ) : (
              <p>No active apps</p>
            )}
          </CCardBody>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <h2>All Agents</h2>
          <Widget className="mb-4" allAgents={allAgents} addAgent={addAgent} />
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default AppsPage

import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

const sampleChatData = {
  1: [
    { sender: 'User', message: 'Hello, I need help with my order.', time: '10:01 AM' },
    { sender: 'Support', message: 'Sure, I would be happy to assist you.', time: '10:02 AM' },
    { sender: 'User', message: 'I want to change my shipping address.', time: '10:03 AM' },
  ],
  2: [
    { sender: 'User', message: 'Can I return a damaged product?', time: '11:01 AM' },
    { sender: 'Support', message: 'Yes, please provide your order number.', time: '11:02 AM' },
  ],
  3: [
    { sender: 'User', message: 'When will my order be delivered?', time: '01:01 PM' },
    { sender: 'Support', message: 'It will be delivered by tomorrow.', time: '01:02 PM' },
  ],
}

const ChatView = ({ id, onBack }) => {
  const chatData = sampleChatData[id] || []

  const getRowColor = (sender) => {
    return sender === 'User' ? 'table-light' : 'table-secondary'
  }

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <h4>Chat View for Conversation ID {id}</h4>
        <CButton color="secondary" onClick={onBack}>
          Back
        </CButton>
      </CCardHeader>
      <CCardBody>
        <CTable responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Sender</CTableHeaderCell>
              <CTableHeaderCell>Message</CTableHeaderCell>
              <CTableHeaderCell>Time</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {chatData.map((chat, index) => (
              <CTableRow key={index} className={getRowColor(chat.sender)}>
                <CTableDataCell>{chat.sender}</CTableDataCell>
                <CTableDataCell>{chat.message}</CTableDataCell>
                <CTableDataCell>{chat.time}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default ChatView

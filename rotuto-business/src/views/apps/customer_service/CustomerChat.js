import React, { useState } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CContainer,
  CCard,
  CCardBody,
  CRow,
  CCol,
  CButton,
  CForm,
  CFormInput,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const CustomerChat = () => {
  const [messages, setMessages] = useState([
    { sender: 'Bot', text: 'Hello! How can I assist you today?' },
  ])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'User', text: input }])
      setInput('')
    }
  }

  return (
    <CContainer className="mt-4">
      <CRow>
        <CCol xs="12" md="8" className="offset-md-2">
          <CCard>
            <CCardBody>
              <h4>Chat</h4>
              <CListGroup className="mb-4" style={{ height: '400px', overflowY: 'auto' }}>
                {messages.map((message, index) => (
                  <CListGroupItem
                    key={index}
                    className={`d-flex justify-content-${
                      message.sender === 'User' ? 'end' : 'start'
                    }`}
                  >
                    <div
                      style={{
                        maxWidth: '70%',
                        padding: '10px 15px',
                        borderRadius: '15px',
                        backgroundColor: message.sender === 'User' ? '#007bff' : '#e9ecef',
                        color: message.sender === 'User' ? '#fff' : '#000',
                      }}
                    >
                      <strong>{message.sender}: </strong>
                      {message.text}
                    </div>
                  </CListGroupItem>
                ))}
              </CListGroup>
              <CForm
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
              >
                <CRow>
                  <CCol xs="9">
                    <CFormInput
                      type="text"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </CCol>
                  <CCol xs="3" className="text-end">
                    <CButton type="submit" color="primary">
                      Send
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default CustomerChat

// src/views/wallet/AgentPricing.js

import React from 'react'
import { CCardBody, CContainer } from '@coreui/react'

const pricingData = [
  {
    title: 'AI Customer Service Assistant',
    price: '$0.005 / Response',
    description:
      "Automate Support, Generate Leads, Collect Feedback. Rotuto's Customer Service Agent is an AI-powered solution designed to transform how businesses handle customer interactions. Our service allows you to create a virtual assistant that can answer customer queries, generate leads, and collect feedback, all based on your specific business information.",
    icon: 'https://img.icons8.com/glyph-neue/64/messaging-.png',
  },
  {
    title: 'AI-Powered Resume Screening',
    price: '$0.007 / Resume',
    description:
      "Rotuto's Resume Screening AI Agent is an advanced solution designed to revolutionize your hiring process. This intelligent tool automatically analyzes and evaluates resumes based on your specific job requirements, saving you countless hours of manual screening. By quickly identifying the most qualified candidates, our AI Agent helps you focus on interviewing the best fits for your organization.",
    icon: 'https://img.icons8.com/ios-glyphs/40/resume.png',
  },
  {
    title: 'AI Appointment Booking',
    price: '$0.007 / Response',
    description:
      "Rotuto's Appointment Booking AI Agent is a sophisticated solution designed to revolutionize how spas, salons, and similar businesses manage their scheduling and customer interactions. This AI-powered assistant can answer customer queries, provide information about services and pricing, and seamlessly book appointments.",
    icon: 'https://img.icons8.com/ios-filled/40/appointment-scheduling.png',
  },
]

const AgentPricing = () => {
  const containerStyle = {
    padding: '0 0 0 0',
    marginBottom: '1rem',
  }

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    gap: '1rem',
  }

  const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '350px', // Adjust as needed
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  }

  return (
    <>
      <p className="text-center mb-4" style={{ marginTop: '1rem' }}>
        Flexible Pay-As-You-Go Pricing: Only pay for what you use, with no long-term commitments.
      </p>
      <CContainer style={containerStyle}>
        <div style={gridStyle}>
          {pricingData.map((item, index) => (
            <div key={index} style={cardStyle}>
              <div style={headerStyle}>
                <h5>{item.title}</h5>
                <img width="32" height="32" src={item.icon} alt={item.title} />
              </div>
              <CCardBody className="text-left">
                <h6>{item.price}</h6>
                <p>{item.description}</p>
              </CCardBody>
            </div>
          ))}
        </div>
      </CContainer>
    </>
  )
}

export default AgentPricing

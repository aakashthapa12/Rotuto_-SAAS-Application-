// src/views/wallet/Wallet.js

import React, { useEffect, useState } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CContainer, CTabs, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'

import PaymentMethod from './PaymentMethod'
import AgentPricing from './AgentPricing'
import Overview from './Overview'
import BillingHistory from './BillingHistory'
import InvoicePreferences from './InvoicePreferences'

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('1')

  return (
    <CContainer>
      <CTabs activeItemKey={activeTab} onActiveKeyChange={setActiveTab}>
        <CNav variant="tabs" role="tablist" style={{ cursor: 'pointer' }}>
          <CNavItem>
            <CNavLink
              active={activeTab === '1'}
              onClick={() => setActiveTab('1')}
              style={
                activeTab === '1'
                  ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                  : {}
              }
            >
              Overview
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === '2'}
              onClick={() => setActiveTab('2')}
              style={
                activeTab === '2'
                  ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                  : {}
              }
            >
              Billing History
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === '3'}
              onClick={() => setActiveTab('3')}
              style={
                activeTab === '3'
                  ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                  : {}
              }
            >
              Payment Methods
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === '4'}
              onClick={() => setActiveTab('4')}
              style={
                activeTab === '4'
                  ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                  : {}
              }
            >
              Preferences
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === '5'}
              onClick={() => setActiveTab('5')}
              style={
                activeTab === '5'
                  ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
                  : {}
              }
            >
              Pricing
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="overview-tab" visible={activeTab === '1'}>
            <Overview setActiveTab={setActiveTab} />
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="billing-history-tab"
            visible={activeTab === '2'}
          >
            <BillingHistory />
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="payment-methods-tab"
            visible={activeTab === '3'}
          >
            <PaymentMethod />
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="preferences-tab" visible={activeTab === '4'}>
            <InvoicePreferences />
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="pricing-tab" visible={activeTab === '5'}>
            <AgentPricing />
          </CTabPane>
        </CTabContent>
      </CTabs>
    </CContainer>
  )
}

export default Wallet

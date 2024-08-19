// import React, { useState, useEffect } from 'react'
// import '@coreui/coreui/dist/css/coreui.min.css'
// import {
//   CContainer,
//   CTabs,
//   CNav,
//   CNavItem,
//   CNavLink,
//   CTabContent,
//   CTabPane,
//   CButton,
//   CSpinner,
// } from '@coreui/react'
// import '@coreui/coreui/dist/css/coreui.min.css'
// import ActiveJobs from './ActiveJobs'
// import { Link } from 'react-router-dom'
// import CompletedJobs from './CompletedJobs'

// const Resume = () => {
//   const [activeTab, setActiveTab] = useState('1')

//   return (
//     <CContainer>
//       <span style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
//         <h3>Resume Screening</h3>
//         <Link to={'/apps/resume-screening/add-job'}>
//           <CButton color="primary">Post Job</CButton>
//         </Link>
//       </span>
//       <CTabs activeItemKey={activeTab} onActiveKeyChange={setActiveTab}>
//         <CNav variant="tabs" role="tablist" style={{ cursor: 'pointer' }}>
//           <CNavItem>
//             <CNavLink
//               active={activeTab === '1'}
//               onClick={() => setActiveTab('1')}
//               style={
//                 activeTab === '1'
//                   ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
//                   : {}
//               }
//             >
//               Active Jobs
//             </CNavLink>
//           </CNavItem>
//           <CNavItem>
//             <CNavLink
//               active={activeTab === '2'}
//               onClick={() => setActiveTab('2')}
//               style={
//                 activeTab === '2'
//                   ? { backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }
//                   : {}
//               }
//             >
//               Closed Jobs
//             </CNavLink>
//           </CNavItem>
//         </CNav>
//         <CTabContent>
//           <CTabPane role="tabpanel" aria-labelledby="overview-tab" visible={activeTab === '1'}>
//             <ActiveJobs></ActiveJobs>
//           </CTabPane>
//           <CTabPane
//             role="tabpanel"
//             aria-labelledby="billing-history-tab"
//             visible={activeTab === '2'}
//           >
//             <CompletedJobs />
//           </CTabPane>
//         </CTabContent>
//       </CTabs>
//     </CContainer>
//   )
// }

// export default Resume

import React, { useState } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CContainer,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CButton,
  CSpinner,
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import ActiveJobs from './ActiveJobs'
import { Link } from 'react-router-dom'
import CompletedJobs from './CompletedJobs'

const Resume = () => {
  const [activeTab, setActiveTab] = useState('1')

  return (
    <CContainer>
      <span style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3>Resume Screening</h3>
        <Link to={'/apps/resume-screening/add-job'}>
          <CButton color="primary">Post Job</CButton>
        </Link>
      </span>
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
              Active Jobs
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
              Closed Jobs
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="overview-tab" visible={activeTab === '1'}>
            <ActiveJobs />
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="billing-history-tab"
            visible={activeTab === '2'}
          >
            <CompletedJobs />
          </CTabPane>
        </CTabContent>
      </CTabs>
    </CContainer>
  )
}

export default Resume

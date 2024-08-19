import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilHistory,
  cilApps,
  cilWallet,
  cilUser,
  cilWalk,
  cilStorage,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Apps',
    to: '/apps',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Customer Service',
        to: '/apps/customer-service',
      },
      {
        component: CNavItem,
        name: 'Appointment Booking',
        to: 'apps/appointment-booking',
      },
      {
        component: CNavItem,
        name: 'Resume Screening',
        to: '/apps/resume-screening',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Usage',
    to: '/usage',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Roles',
    to: '/roles',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Billing',
    to: '/billing',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Activity',
    to: '/activity',
    icon: <CIcon icon={cilWalk} customClassName="nav-icon" />,
  },
]

export default _nav

import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Apps = React.lazy(() => import('./views/apps/Apps'))
const Resume = React.lazy(() => import('./views/apps/resume/Resume'))
const Candidates = React.lazy(() => import('./views/apps/resume/view_candidates/Candidates'))
const PostJob = React.lazy(() => import('./views/apps/resume/add_job/PostJob'))
const ViewJob = React.lazy(() => import('./views/apps/resume/add_job/ViewJob'))

const CustomerService = React.lazy(() => import('./views/apps/customer_service/CustomerService'))

const Appointment = React.lazy(() => import('./views/apps/appointment_booking/Appointment'))

const Usage = React.lazy(() => import('./views/usage/Usage'))
const OrderConfirmationPage = React.lazy(() => import('./views/OrderSuccess/OrderConfirmationPage'))
const InvoiceView = React.lazy(() => import('./views/OrderSuccess/InvoiceView'))
const Roles = React.lazy(() => import('./views/roles/Roles'))
const Wallet = React.lazy(() => import('./views/wallet/Wallet'))
const Activity = React.lazy(() => import('./views/activity/Activity'))
const Profile = React.lazy(() => import('./views/profile/Profile'))
const ChangePassword = React.lazy(() => import('./views/profile/ChangePassword'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/apps', name: 'Apps', element: Apps },
  { path: '/apps/resume-screening', name: 'Resume Screening', element: Resume },
  { path: '/apps/resume-screening/add-job', name: 'Post Job', element: PostJob },
  { path: '/apps/resume-screening/view-job/:id', name: 'View Job', element: ViewJob },
  { path: '/apps/resume-screening/candidates/:id', name: 'Candidates List', element: Candidates },

  { path: '/apps/customer-service', name: 'Customer Service', element: CustomerService },

  { path: '/apps/appointment-booking', name: 'Appointment Booking', element: Appointment },

  { path: '/usage', name: 'Usage', element: Usage },
  { path: '/success', name: 'Order Confirmed', element: OrderConfirmationPage },
  { path: '/orders/:Id', name: 'Order Details', element: InvoiceView },
  { path: '/roles', name: 'Roles', element: Roles },
  { path: '/billing', name: 'Billing', element: Wallet },
  { path: '/activity', name: 'Activity', element: Activity },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/profile/change-password', name: 'Change Password', element: ChangePassword },
]

export default routes

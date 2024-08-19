import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import ForgotPassword from './views/pages/forgot/ForgotPassword'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import ViewApplyJob from './views/apps/resume/job_apply/ViewApplyJob'
import CustomerChat from './views/apps/customer_service/CustomerChat'
import ProtectedRoute from './utils/ProtectedRoute'
import { useGetWalletByBusinessIdQuery } from './app/service/walletApiSlice'

const App = () => {
  const dispatch = useDispatch()

  const { data, isLoading, refetch } = useGetWalletByBusinessIdQuery()

  // setTimeout(() => {
  //   refetch()
  //   if (data) {
  //     dispatch(setWallet(data))
  //   }
  // }, 5000)

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <ToastContainer />
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route
            exact
            path="/forgot-password"
            name="Forgot Password Page"
            element={<ForgotPassword />}
          />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route
            exact
            path="/prima/:business-name-business-ID/Chat"
            name="Customer Chat Support"
            element={<CustomerChat />}
          />
          <Route exact path="/prima/*" name="Apply Job" element={<ViewApplyJob />} />
          <Route path="*" name="Home" element={<ProtectedRoute />}>
            <Route path="*" element={<DefaultLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

import { Outlet, Navigate } from 'react-router-dom'
import { useGetUserQuery } from '../app/service/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setCredentials } from '../app/features/auth/authSlice'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { setWallet } from '../app/features/wallet/walletSlice'
import { useGetWalletByBusinessIdQuery } from '../app/service/walletApiSlice'

const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth.userInfo)
  const { data, isLoading, isSuccess, isError } = useGetUserQuery(null, {
    skip: !!userInfo, // Skip query if userInfo is already in Redux state
  })
  const { data: walletData, refetch: refetchWalletDetails } = useGetWalletByBusinessIdQuery(
    undefined,
    {
      skip: !userInfo, // Skip query if user is not authenticated
    },
  )
  const [userLoaded, setUserLoaded] = useState(false)

  useEffect(() => {
    if (data && !userInfo) {
      dispatch(setCredentials(data))
      console.log(data)
      setUserLoaded(true)
    } else if (isError && !userInfo) {
      dispatch(logout())
      setUserLoaded(true)
      console.log('No user found. Logging out.')
    } else if (userInfo) {
      setUserLoaded(true)
    }
  }, [data, isError, userInfo, dispatch])

  useEffect(() => {
    if (walletData) {
      dispatch(setWallet(walletData))
    }
  }, [walletData, dispatch])

  useEffect(() => {
    if (userInfo) {
      const intervalId = setInterval(() => {
        refetchWalletDetails()
      }, 5000) // Fetch every 5 seconds

      return () => clearInterval(intervalId) // Clear interval on unmount
    }
  }, [userInfo, refetchWalletDetails])

  if (isLoading && !userInfo && !userLoaded) return <Spinner />
  if (isError && !userInfo && userLoaded) return <Navigate to={redirectPath} />

  return userLoaded ? <Outlet /> : <Spinner />
}

export default ProtectedRoute

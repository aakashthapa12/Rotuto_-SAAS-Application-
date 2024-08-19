import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilAccountLogout,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../app/features/auth/authSlice'
import { useLogoutUserMutation } from '../../app/service/usersApiSlice'
import { toast } from 'react-toastify'
import Logo from '../../utils/Logo'
import { clearWallet } from '../../app/features/wallet/walletSlice'

const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: 'inherit', // Inherit text color
}

const AppHeaderDropdown = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  const [logoutUser, { isLoaing }] = useLogoutUserMutation()

  const logoutHandlder = async () => {
    try {
      await logoutUser()
      dispatch(clearWallet())
      dispatch(logout())
      toast.success('Logout Sucessful!')
      navigate('/login')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        {/* <CAvatar src={avatar8} size="md" /> */}
        <Logo businessName={userInfo.businessName} />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={() => navigate('/profile')} style={linkStyle} disabled>
          <CIcon icon={cilUser} className="me-2" />
          ID: {userInfo?.businessId}
        </CDropdownItem>
        <CDropdownItem onClick={() => navigate('/profile')} style={linkStyle}>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem onClick={() => navigate('/profile/change-password')} style={linkStyle}>
          <CIcon icon={cilSettings} className="me-2" />
          Change Password
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={logoutHandlder} style={{ ...linkStyle, textDecoration: 'none' }}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown

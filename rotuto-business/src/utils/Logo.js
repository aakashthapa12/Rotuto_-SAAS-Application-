import React from 'react'
import styles from './Logo.module.css'
import { CAvatar } from '@coreui/react'

const getInitials = (businessName) => {
  const words = businessName.split(' ')
  if (words.length > 1) {
    return words
      .map((word) => word[0])
      .join('')
      .toUpperCase()
  } else {
    return words[0].slice(0, 2).toUpperCase()
  }
}

const Logo = ({ businessName }) => {
  const initials = getInitials(businessName)

  return (
    <CAvatar className={styles.logo} color="primary" textColor="white">
      {initials}
    </CAvatar>
  )
}

export default Logo

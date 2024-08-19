// src/views/wallet/WalletBalance.js

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CForm,
  CInputGroup,
  CInputGroupText,
  CCol,
  CRow,
  CFormLabel,
} from '@coreui/react'
import { toast } from 'react-toastify'
import { useCreateSessionMutation } from '../../app/service/orderSlice'

import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)

const Wallet = () => {
  const { userInfo } = useSelector((state) => state.auth)

  console.log(userInfo)
  const [balance, setBalance] = useState(userInfo.walletBalance) // Initial balance
  const [amount, setAmount] = useState('')
  const [totalCredits, setTotalCredits] = useState(userInfo.totalCredits)
  const [totalDebits, setTotalDebits] = useState(userInfo.totalUsage)

  const [createSession, { isLoading, isError, isSuccess }] = useCreateSessionMutation()

  const handleAddAmount = async (e) => {
    e.preventDefault()
    try {
      const amountValue = parseFloat(amount)
      if (!isNaN(amountValue) && amountValue >= 5 && amountValue <= 1000) {
        const stripe = await stripePromise

        const res = await createSession({ amount: amountValue }).unwrap()
        console.log(res)
        console.log(amountValue)
        const result = await stripe.redirectToCheckout({
          sessionId: res.session.id,
        })

        console.log(result)

        if (result.error) {
          console.error(result.error.message)
        }
      } else {
        toast.error('Please enter a valid amount between $5 and $1000')
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  const handleChange = (e) => {
    let value = e.target.value

    // Remove non-numeric characters except for the decimal point
    value = value.replace(/[^0-9.]/g, '')

    // Ensure only one decimal point
    const decimalCount = (value.match(/\./g) || []).length
    if (decimalCount > 1) {
      value = value.replace(/\.$/, '')
    }

    // Fix to 2 decimal places if a decimal point exists
    if (value.includes('.')) {
      const [integerPart, decimalPart] = value.split('.')
      value = integerPart + '.' + decimalPart.slice(0, 2)
    }

    setAmount(value)
  }
  return (
    <CRow className="justify-content-center">
      <CCol xs="12" md="4">
        <CCard>
          <CCardHeader className="text-center">Wallet Balance</CCardHeader>
          <CCardBody>
            <h3 className="text-center">${balance.toFixed(2)}</h3>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="4">
        <CCard>
          <CCardHeader className="text-center">Add Amount to Wallet</CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleAddAmount}>
              <CInputGroup className="mb-3">
                <CFormLabel htmlFor="amount" className="visually-hidden">
                  Amount
                </CFormLabel>
                <CInputGroup>
                  <CInputGroupText>$</CInputGroupText>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    className="form-control"
                    value={amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    step="0.01"
                    min="5"
                    max="1000"
                  />
                </CInputGroup>
              </CInputGroup>
              <CButton type="submit" color="primary" className="w-100 mt-2">
                {isLoading ? 'Processing...' : 'Add Amount'}
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="4">
        <CCard>
          <CCardHeader className="text-center">Summary</CCardHeader>
          <CCardBody>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">Category</th>
                  <th className="text-center">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Credits</td>
                  <td className="text-end">${totalCredits.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total Usage</td>
                  <td className="text-end">${totalDebits.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Current Balance</td>
                  <td className="text-end">${balance.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Wallet

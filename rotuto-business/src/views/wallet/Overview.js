// // src/views/wallet/Overview.js

// import React, { useState } from 'react'
// import {
//   CButton,
//   CContainer,
//   CFormCheck,
//   CInputGroup,
//   CInputGroupText,
//   CCol,
//   CRow,
//   CLink,
//   CTooltip,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CFormInput,
//   CFormSelect,
//   CFormSwitch,
//   CForm,
//   CSpinner,
// } from '@coreui/react'
// import { useSelector } from 'react-redux'
// import { useCreateSessionMutation } from '../../app/service/orderSlice'
// import { loadStripe } from '@stripe/stripe-js'
// const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)

// const Overview = ({ setActiveTab }) => {
//   const { wallet } = useSelector((state) => state.wallet)
//   const { userInfo } = useSelector((state) => state.auth)
//   const [modalVisible, setModalVisible] = useState(false)
//   const [autoRechargeModalVisible, setAutoRechargeModalVisible] = useState(false)

//   const [autoRecharge, setAutoRecharge] = useState(false)
//   const [amount, setAmount] = useState('')

//   const [isPayamentInProgess, setIsPayamentInProgess] = useState(false)
//   const [createSession, { isLoading, isError, isSuccess }] = useCreateSessionMutation()

//   const handleChange = (e) => {
//     let value = e.target.value

//     // Remove non-numeric characters except for the decimal point
//     value = value.replace(/[^0-9.]/g, '')

//     // Ensure only one decimal point
//     const decimalCount = (value.match(/\./g) || []).length
//     if (decimalCount > 1) {
//       value = value.replace(/\.$/, '')
//     }

//     // Fix to 2 decimal places if a decimal point exists
//     if (value.includes('.')) {
//       const [integerPart, decimalPart] = value.split('.')
//       value = integerPart + '.' + decimalPart.slice(0, 2)
//     }

//     setAmount(value)
//   }

//   const handleAddCreditSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const amountValue = parseFloat(amount)
//       if (!isNaN(amountValue) && amountValue >= 5 && amountValue <= 1000) {
//         setIsPayamentInProgess(true)
//         const stripe = await stripePromise

//         const res = await createSession({
//           amount: amountValue,
//           customerId: userInfo.stripeCustomerId,
//           businessId: userInfo.businessId,
//         }).unwrap()
//         console.log(res)
//         console.log(amountValue)
//         const result = await stripe.redirectToCheckout({
//           sessionId: res.session.id,
//         })

//         console.log(result)

//         if (result.error) {
//           console.error(result.error.message)
//         }
//         setIsPayamentInProgess(false)
//       } else {
//         toast.error('Please enter a valid amount between $5 and $1000')
//       }
//     } catch (err) {
//       setIsPayamentInProgess(false)
//       toast.error(err?.data?.message || err.error)
//     }
//   }

//   const handleAutoRechargeSubmit = (e) => {
//     e.preventDefault()
//   }

//   return (
//     <CContainer
//       style={{
//         marginTop: '1rem',
//         backgroundColor: '#fff',
//         color: '#000',
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: '#f8f9fa',
//           color: '#000',
//           borderRadius: '8px',
//           padding: '1rem',
//           marginBottom: '1rem',
//         }}
//       >
//         <h4>Pay as you go</h4>
//         <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
//           Credit balance{' '}
//           <CTooltip
//             placement="right"
//             content="Your credit balance will decrease as you make use of the API. Visit the usage page to monitor how your credits are being used."
//           >
//             <img
//               width="12"
//               height="12"
//               src="https://img.icons8.com/ios/20/info--v1.png"
//               alt="info--v1"
//             />
//           </CTooltip>
//         </p>
//         <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>${wallet.balance.toFixed(3)}</p>
//         <CFormCheck
//           id="autoRecharge"
//           label="Auto recharge is off"
//           checked={autoRecharge}
//           onChange={(e) => setAutoRecharge(e.target.checked)}
//           style={{ marginBottom: '1rem' }}
//         />
//         <p>
//           When your credit balance reaches $0, your API requests will stop working. Enable automatic
//           recharge to automatically keep your credit balance topped up.
//         </p>
//         <CLink
//           href="#"
//           style={{ color: 'green', display: 'block', marginBottom: '1rem' }}
//           onClick={() => setAutoRechargeModalVisible(true)}
//         >
//           Enable auto recharge
//         </CLink>
//         <CButton
//           color="primary"
//           style={{ marginRight: '1rem' }}
//           onClick={() => setModalVisible(true)}
//         >
//           Add to credit balance
//         </CButton>
//       </div>

//       <CRow className="text-center">
//         <CCol>
//           <div
//             onClick={(e) => setActiveTab('2')}
//             style={{
//               cursor: 'pointer',
//               backgroundColor: '#eae1ff',
//               color: '#000',
//               borderRadius: '8px',
//               padding: '1rem',
//               marginBottom: '1rem',
//             }}
//           >
//             <img
//               width="40"
//               height="40"
//               src="https://img.icons8.com/color/32/payment-history.png"
//               alt="Billing History"
//               style={{ marginBottom: '0.5rem' }}
//             />
//             <h5>Billing history</h5>
//             <p>View past and current invoices</p>
//           </div>
//         </CCol>
//         <CCol>
//           <div
//             onClick={(e) => setActiveTab('3')}
//             style={{
//               cursor: 'pointer',
//               backgroundColor: '#e7f5ff',
//               color: '#000',
//               borderRadius: '8px',
//               padding: '1rem',
//               marginBottom: '1rem',
//             }}
//           >
//             <img
//               width="40"
//               height="40"
//               alt="Payment Methods"
//               style={{ marginBottom: '0.5rem' }}
//               src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/53/external-payment-method-shopping-and-commerce-smashingstocks-outline-color-smashing-stocks.png"
//             />
//             <h5>Payment methods</h5>
//             <p>Manage payment methods</p>
//           </div>
//         </CCol>

//         <CCol>
//           <div
//             onClick={(e) => setActiveTab('4')}
//             style={{
//               cursor: 'pointer',
//               backgroundColor: '#ffebe1',
//               color: '#000',
//               borderRadius: '8px',
//               padding: '1rem',
//               marginBottom: '1rem',
//             }}
//           >
//             <img
//               width="40"
//               height="40"
//               src="https://img.icons8.com/color/48/automatic.png"
//               alt="Preferences"
//               style={{ marginBottom: '0.5rem' }}
//             />
//             <h5>Preferences</h5>
//             <p>Manage billing information</p>
//           </div>
//         </CCol>
//         <CCol>
//           <div
//             onClick={(e) => setActiveTab('5')}
//             style={{
//               cursor: 'pointer',
//               backgroundColor: '#f0fff4',
//               color: '#000',
//               borderRadius: '8px',
//               padding: '1rem',
//               marginBottom: '1rem',
//             }}
//           >
//             <img
//               width="40"
//               height="40"
//               src="https://img.icons8.com/color/40/tags--v1.png"
//               alt="Pricing"
//               style={{ marginBottom: '0.5rem' }}
//             />
//             <h5>Pricing</h5>
//             <p>View pricing and FAQs</p>
//           </div>
//         </CCol>
//       </CRow>

//       <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
//         <CModalHeader onClose={() => setModalVisible(false)}>Add to credit balance</CModalHeader>
//         <CModalBody>
//           <CForm onSubmit={handleAddCreditSubmit}>
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="amount" style={{ display: 'block', marginBottom: '0.5rem' }}>
//                 Amount to add
//               </label>
//               <CInputGroup>
//                 <CInputGroupText>$</CInputGroupText>
//                 <CFormInput
//                   type="number"
//                   name="amount"
//                   required
//                   value={amount}
//                   className="form-control"
//                   onChange={handleChange}
//                   placeholder="Enter amount"
//                   step="0.01"
//                   min="5"
//                   max="1000"
//                 />
//               </CInputGroup>
//               <small>Enter an amount between $5 and $1000</small>
//             </div>
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="paymentMethod" style={{ display: 'block', marginBottom: '0.5rem' }}>
//                 Payment method
//               </label>
//               <CFormSelect id="paymentMethod" required>
//                 <option>Select a payment method</option>
//                 <option>Master ending in 1129</option>
//               </CFormSelect>
//               <CLink href="#" style={{ color: 'green', display: 'block', marginTop: '0.5rem' }}>
//                 + Add payment method
//               </CLink>
//             </div>
//             <CModalFooter>
//               <CButton color="secondary" onClick={() => setModalVisible(false)}>
//                 Cancel
//               </CButton>
//               <CButton color="primary" type="submit">
//                 {isPayamentInProgess ? <CSpinner size={'sm'} /> : 'Continue'}
//               </CButton>
//             </CModalFooter>
//           </CForm>
//         </CModalBody>
//       </CModal>

//       <CModal visible={autoRechargeModalVisible} onClose={() => setAutoRechargeModalVisible(false)}>
//         <CModalHeader onClose={() => setAutoRechargeModalVisible(false)}>
//           Auto recharge settings
//         </CModalHeader>
//         <CModalBody>
//           <CForm onSubmit={handleAutoRechargeSubmit}>
//             <div style={{ marginBottom: '1rem' }}>
//               <CFormSwitch
//                 required
//                 id="autoRechargeSwitch"
//                 label="Yes, automatically recharge my card when my credit balance falls below a threshold"
//                 checked={autoRecharge}
//                 onChange={(e) => setAutoRecharge(e.target.checked)}
//               />
//             </div>
//             <div style={{ marginBottom: '1rem' }}>
//               <label
//                 htmlFor="rechargeThreshold"
//                 style={{ display: 'block', marginBottom: '0.5rem' }}
//               >
//                 When credit balance goes below
//               </label>
//               <CInputGroup>
//                 <CInputGroupText>$</CInputGroupText>
//                 <CFormInput
//                   type="number"
//                   id="rechargeThreshold"
//                   min={5}
//                   max={95}
//                   required
//                   step={0.01}
//                   className="form-control"
//                   placeholder="Enter amount"
//                   onChange={handleChange}
//                 />
//               </CInputGroup>

//               <small>Enter an amount between $5 and $95</small>
//             </div>
//             <div style={{ marginBottom: '1rem' }}>
//               <label htmlFor="rechargeAmount" style={{ display: 'block', marginBottom: '0.5rem' }}>
//                 Bring credit balance back up to
//               </label>
//               <CInputGroup>
//                 <CInputGroupText>$</CInputGroupText>
//                 <CFormInput
//                   type="number"
//                   id="rechargeAmount"
//                   className="form-control"
//                   placeholder="Enter amount"
//                   min={10}
//                   required
//                   onChange={handleChange}
//                   max={100}
//                   step={0.01}
//                 />
//               </CInputGroup>
//               <small>Enter an amount between $10 and $100</small>
//             </div>
//             <CModalFooter>
//               <CButton color="secondary" onClick={() => setAutoRechargeModalVisible(false)}>
//                 Cancel
//               </CButton>
//               <CButton color="primary">Save settings</CButton>
//             </CModalFooter>
//           </CForm>
//         </CModalBody>
//       </CModal>
//     </CContainer>
//   )
// }

// export default Overview

import React, { useState } from 'react'
import {
  CButton,
  CContainer,
  CFormCheck,
  CInputGroup,
  CInputGroupText,
  CCol,
  CRow,
  CLink,
  CTooltip,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormSelect,
  CFormSwitch,
  CForm,
  CSpinner,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import { useCreateSessionMutation } from '../../app/service/orderSlice'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)

const Overview = ({ setActiveTab }) => {
  const { wallet } = useSelector((state) => state.wallet)
  const { userInfo } = useSelector((state) => state.auth)
  const [modalVisible, setModalVisible] = useState(false)
  const [autoRechargeModalVisible, setAutoRechargeModalVisible] = useState(false)

  const [autoRecharge, setAutoRecharge] = useState(false)
  const [amount, setAmount] = useState('')

  const [isPayamentInProgess, setIsPayamentInProgess] = useState(false)
  const [createSession, { isLoading, isError, isSuccess }] = useCreateSessionMutation()

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

  const handleAddCreditSubmit = async (e) => {
    e.preventDefault()
    try {
      const amountValue = parseFloat(amount)
      if (!isNaN(amountValue) && amountValue >= 5 && amountValue <= 1000) {
        setIsPayamentInProgess(true)
        const stripe = await stripePromise

        const res = await createSession({
          amount: amountValue,
          customerId: userInfo.stripeCustomerId,
          businessId: userInfo.businessId,
        }).unwrap()
        console.log(res)
        console.log(amountValue)
        const result = await stripe.redirectToCheckout({
          sessionId: res.session.id,
        })

        console.log(result)

        if (result.error) {
          console.error(result.error.message)
        }
        setIsPayamentInProgess(false)
      } else {
        toast.error('Please enter a valid amount between $5 and $1000')
      }
    } catch (err) {
      setIsPayamentInProgess(false)
      toast.error(err?.data?.message || err.error)
    }
  }

  const handleAutoRechargeSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <CContainer
      style={{
        marginTop: '1rem',
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      <div
        style={{
          backgroundColor: '#f8f9fa',
          color: '#000',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h4>Pay as you go</h4>
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Credit balance{' '}
          <CTooltip
            placement="right"
            content="Your credit balance will decrease as you make use of the API. Visit the usage page to monitor how your credits are being used."
          >
            <img
              width="12"
              height="12"
              src="https://img.icons8.com/ios/20/info--v1.png"
              alt="info--v1"
            />
          </CTooltip>
        </p>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          ${wallet?.balance?.toFixed(3) || '0.000'}
        </p>
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="Enable Auto Recharge"
          checked={autoRecharge}
          onChange={(e) => setAutoRecharge(e.target.checked)}
        />
        <p style={{ marginTop: '0.5rem' }}>
          Automatically recharge your balance when it falls below a specified amount.
        </p>
      </div>

      <CRow>
        <CCol xs={12} md={6}>
          <CButton
            onClick={() => setModalVisible(true)}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
            }}
          >
            Add Credit
          </CButton>
        </CCol>
        <CCol xs={12} md={6}>
          <CButton
            onClick={() => setAutoRechargeModalVisible(true)}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
            }}
          >
            Manage Auto Recharge
          </CButton>
        </CCol>
      </CRow>

      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader onClose={() => setModalVisible(false)}>Add Credit</CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleAddCreditSubmit}>
            <CInputGroup className="mb-3">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput placeholder="Amount" value={amount} onChange={handleChange} required />
            </CInputGroup>
            <CButton
              type="submit"
              color="primary"
              style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}
              disabled={isPayamentInProgess}
            >
              {isPayamentInProgess ? <CSpinner size="sm" /> : 'Add Credit'}
            </CButton>
          </CForm>
        </CModalBody>
      </CModal>

      <CModal visible={autoRechargeModalVisible} onClose={() => setAutoRechargeModalVisible(false)}>
        <CModalHeader onClose={() => setAutoRechargeModalVisible(false)}>
          Manage Auto Recharge
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleAutoRechargeSubmit}>
            <CFormSwitch
              label="Enable Auto Recharge"
              checked={autoRecharge}
              onChange={(e) => setAutoRecharge(e.target.checked)}
              className="mb-3"
            />
            <CInputGroup className="mb-3">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput
                placeholder="Recharge Amount"
                value={amount}
                onChange={handleChange}
                required
              />
            </CInputGroup>
            <CButton
              type="submit"
              color="primary"
              style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              Save
            </CButton>
          </CForm>
        </CModalBody>
      </CModal>
    </CContainer>
  )
}

export default Overview

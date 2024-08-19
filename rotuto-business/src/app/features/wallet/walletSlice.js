import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wallet: null,
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWallet: (state, action) => {
      state.wallet = action.payload
    },
    clearWallet: (state, action) => {
      state.wallet = null
    },
  },
})

export const { setWallet, clearWallet } = walletSlice.actions

export default walletSlice.reducer

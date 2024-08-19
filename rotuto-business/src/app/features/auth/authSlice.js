import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
  userInfo: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
    },
    logout: (state, action) => {
      state.userInfo = null
    },
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

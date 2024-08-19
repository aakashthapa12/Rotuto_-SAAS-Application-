import { apiSlice } from './apiSlice'

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSession: builder.mutation({
      query: (data) => ({
        url: '/api/v1/orders/create-checkout-session',
        method: 'POST',
        body: data,
      }),
    }),
    getUsage: builder.query({
      query: (data) => ({
        url: '/api/v1/usage',
      }),
    }),
    getOrderBySessionId: builder.query({
      query: (sessionId) => ({
        url: `/api/v1/orders/session/${sessionId}`,
      }),
    }),
    getOrderByOrderId: builder.query({
      query: (orderId) => ({
        url: `/api/v1/orders/${orderId}`,
      }),
    }),
  }),
})

export const {
  useCreateSessionMutation,
  useGetUsageQuery,
  useGetOrderBySessionIdQuery,
  useGetOrderByOrderIdQuery,
} = orderApiSlice

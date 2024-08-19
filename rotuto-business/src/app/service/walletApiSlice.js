import { apiSlice } from './apiSlice'

export const walletApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWalletByBusinessId: builder.query({
      query: (data) => ({
        url: '/api/v1/wallet',
      }),
    }),
  }),
})

export const { useGetWalletByBusinessIdQuery } = walletApiSlice

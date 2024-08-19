import { apiSlice } from './apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/login`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/api/v1/users/signup',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/api/v1/users/logout',
        method: 'GET',
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/api/v1/users/updateMe',
        method: 'PATCH',
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: '/api/v1/users/me',
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutUserMutation,
  useUpdateUserMutation,
  useGetUserQuery,
} = userApiSlice

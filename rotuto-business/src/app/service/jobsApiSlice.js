import { apiSlice } from './apiSlice'

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobsByBusinessId: builder.query({
      query: () => ({
        url: `/api/v1/jobs`,
        method: 'GET',
      }),
    }),
    getJob: builder.query({
      query: (id) => ({
        url: `/api/v1/jobs/${id}`,
        method: 'GET',
      }),
    }),
    postJob: builder.mutation({
      query: (data) => ({
        url: '/api/v1/jobs',
        method: 'POST',
        body: data,
      }),
    }),
    updateJob: builder.mutation({
      query: (args) => ({
        url: `/api/v1/jobs/${args.id}`,
        method: 'PATCH',
        body: args.data,
      }),
    }),
  }),
})

export const {
  useGetAllJobsByBusinessIdQuery,
  useGetJobQuery,
  usePostJobMutation,
  useUpdateJobMutation,
} = jobsApiSlice

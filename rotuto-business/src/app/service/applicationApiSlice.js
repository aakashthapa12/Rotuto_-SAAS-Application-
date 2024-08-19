import { apiSlice } from './apiSlice'

export const applicationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (data) => ({
        url: `/api/v1/applications/create`,
        method: 'POST',
        body: data,
      }),
    }),
    getApplicationsByJobId: builder.query({
      query: (jobId) => ({
        url: `/api/v1/applications?jobId=${jobId}`,
        method: 'GET',
      }),
    }),
    updateApplicationStatus: builder.mutation({
      query: ({ data, applicationId }) => ({
        url: `/api/v1/applications/${applicationId}`,
        method: 'PATCH',
        body: data,
      }),
    }),
  }),
})

export const {
  useCreateApplicationMutation,
  useGetApplicationsByJobIdQuery,
  useUpdateApplicationStatusMutation,
} = applicationApiSlice

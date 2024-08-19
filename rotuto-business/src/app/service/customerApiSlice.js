import { apiSlice } from './apiSlice'

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: (data) => ({
        url: '/api/v1/customer-service/upload-file',
        method: 'POST',
        body: data,
      }),
    }),
    getFilesByBusiness: builder.query({
      query: () => ({
        url: '/api/v1/customer-service/',
        method: 'GET',
      }),
    }),
    deleteFile: builder.mutation({
      query: (fileId) => ({
        url: `/api/v1/customer-service/${fileId}`,
        method: 'PATCH',
      }),
    }),
    updateFile: builder.mutation({
      query: ({ data, fileId }) => ({
        url: `/api/v1/customer-service/${fileId}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
})

export const {
  useUploadFileMutation,
  useGetFilesByBusinessQuery,
  useDeleteFileMutation,
  useUpdateFileMutation,
} = customerApiSlice

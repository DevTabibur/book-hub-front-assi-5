import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthenticationAPI = createApi({
  reducerPath: "AuthenticationAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/book",
    }),
    singleBook: builder.query({
      query: (bookId) =>`/book/${bookId}`
    }),
    updateBooks: builder.mutation({
      query: ({ bookId, bookData }) => ({
        url: `/book/${bookId}`,
        method: `PATCH`,
        body: bookData,
      }),
    }),
    createBooks: builder.mutation({
      query: (bookData ) => ({
        url: `/book`,
        method: `POST`,
        body: bookData,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useSingleBookQuery,
  useUpdateBooksMutation,
  useCreateBooksMutation
} = AuthenticationAPI;
export default AuthenticationAPI;

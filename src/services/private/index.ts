import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/utilis/contants';

export const privateAPI = createApi({
  reducerPath: 'privateAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: () => ({}),
});

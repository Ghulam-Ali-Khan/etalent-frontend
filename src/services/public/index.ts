import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/utilis/contants';

export const publicAPI = createApi({
  reducerPath: 'publicAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['award_list', 'certification_list', 'education_list', 'education_experience_list',
    'project_list', 'experince_list', 'overview', 'portfolio_list', 'profile', 'publication_list', 'soft_skills', 'technical_skills'],
  endpoints: () => ({}),
});

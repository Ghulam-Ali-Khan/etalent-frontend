import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const educationAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createEducation: build.mutation({
      query: (body) => ({
        url: 'Education',
        method: 'POST',
        body: [body],
      }),
      invalidatesTags: ['education_list']
    }),
    updateEducation: build.mutation({
      query: (body) => ({
        url: 'Education',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['education_list']
    }),
    getAllEducation: build.query({
      query: () => ({
        url: `Education/${userId}`,
        method: 'GET',
      }),
      providesTags: ['education_list']
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useGetAllEducationQuery,
  useUpdateEducationMutation
} = educationAPI;
import { publicAPI } from '../public/index';

// const userId = localStorage.getItem('userId');

export const educationAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createEducation: build.mutation({
      query: (body) => ({
        url: 'Education',
        method: 'POST',
        body: [body],
      }),
      invalidatesTags: ['education_list', 'education_experience_list']
    }),
    updateEducation: build.mutation({
      query: (body) => ({
        url: 'Education',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['education_list', 'education_experience_list']
    }),
    deleteEducation: build.mutation({
      query: (id) => ({
        url: 'Education',
        method: 'Delete',
        body: { id, userId: localStorage.getItem('userId') },
      }),
      invalidatesTags: ['education_list', 'education_experience_list']
    }),
    getAllEducation: build.query({
      query: () => ({
        url: `Education/${localStorage.getItem('userId')}`,
        method: 'GET',
      }),
      providesTags: ['education_list']
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useGetAllEducationQuery,
  useUpdateEducationMutation,
  useDeleteEducationMutation
} = educationAPI;
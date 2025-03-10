import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const experienceAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createExperience: build.mutation({
      query: (body) => ({
        url: 'Experience',
        method: 'POST',
        body: [body],
      }),
      invalidatesTags: ['experince_list', 'education_experience_list']
    }),
    updateExperience: build.mutation({
      query: (body) => ({
        url: 'Experience',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: ['experince_list', 'education_experience_list']
    }),
    deleteExperience: build.mutation({
      query: (id) => ({
        url: 'Experience',
        method: 'Delete',
        body: {id, userId},
      }),
      invalidatesTags: ['experince_list', 'education_experience_list']
    }),
    getAllExperience: build.query({
      query: () => ({
        url: `Experience`,
        method: 'GET',
        params: {
          userId,
        }
      }),
      providesTags: ['experince_list']
    }),
  }),
});

export const {
  useCreateExperienceMutation,
  useGetAllExperienceQuery,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation
} = experienceAPI;
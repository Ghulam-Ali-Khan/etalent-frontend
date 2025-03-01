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
      invalidatesTags: ['experince_list']
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
  useGetAllExperienceQuery
} = experienceAPI;
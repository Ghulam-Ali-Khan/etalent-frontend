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
    }),
    getAllExperience: build.query({
      query: () => ({
        url: `Experience`,
        method: 'GET',
        params: {
            userId,
        }
      }),
    }),
  }),
});

export const {
  useCreateExperienceMutation,
  useGetAllExperienceQuery
} = experienceAPI;
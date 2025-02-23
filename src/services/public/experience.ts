import { publicAPI } from '../public/index';

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
      query: (id) => ({
        url: `Experience`,
        method: 'GET',
        params: {
            userId: id
        }
      }),
    }),
  }),
});

export const {
  useCreateExperienceMutation,
  useGetAllExperienceQuery
} = experienceAPI;
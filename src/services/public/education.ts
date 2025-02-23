import { publicAPI } from '../public/index';

export const educationAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createEducation: build.mutation({
      query: (body) => ({
        url: 'Education',
        method: 'POST',
        body: [body],
      }),
    }),
  }),
});

export const {
  useCreateEducationMutation,
} = educationAPI;
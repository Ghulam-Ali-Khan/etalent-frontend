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
    getAllEducation: build.query({
      query: (id) => ({
        url: `Education/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useGetAllEducationQuery
} = educationAPI;
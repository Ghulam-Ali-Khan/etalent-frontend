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
    }),
    getAllEducation: build.query({
      query: () => ({
        url: `Education/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useGetAllEducationQuery
} = educationAPI;
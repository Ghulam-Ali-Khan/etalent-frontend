import { publicAPI } from '../public/index';

// const userId = localStorage.getItem('userId');

export const educationExperienceAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    getAllExperienceEducation: build.query({
      query: (id) => ({
        url: `Project/GetProjects`,
        method: 'GET',
        params: {
          userId: id || localStorage.getItem('userId'),
        }
      }),
      providesTags: ['education_experience_list', 'project_list']
    }),
  }),
});

export const {
  useGetAllExperienceEducationQuery,
} = educationExperienceAPI;
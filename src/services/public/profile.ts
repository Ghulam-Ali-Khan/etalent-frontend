import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const profileAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createProfile: build.mutation({
      query: (body) => ({
        url: 'Profile',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['profile']
    }),
    updateProfile: build.mutation({
      query: (body) => ({
        url: 'Profile',
        method: 'PUT',
        body: {...body, userId},
      }),
      invalidatesTags: ['profile']
    }),
    getPorfile: build.query({
      query: (id) => ({
        url: `Profile`,
        method: 'GET',
        params: {
         userId: id || userId,
        }
      }),
      providesTags: ['profile']
    }),
  }),
});

export const {
  useCreateProfileMutation,
  useUpdateProfileMutation,
  useGetPorfileQuery
} = profileAPI;
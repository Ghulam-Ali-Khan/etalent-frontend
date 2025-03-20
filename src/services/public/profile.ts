import { publicAPI } from '../public/index';

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
        body: { ...body, userId: localStorage.getItem('userId') }, // Fetch dynamically
      }),
      invalidatesTags: ['profile']
    }),
    getPorfile: build.query({
      query: (id) => ({
        url: `Profile`,
        method: 'GET',
        params: {
          userId: id || localStorage.getItem('userId'), // Fetch dynamically
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
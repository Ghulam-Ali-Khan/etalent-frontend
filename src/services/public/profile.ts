import { publicAPI } from '../public/index';

export const profileAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createProfile: build.mutation({
      query: (body) => ({
        url: 'Profile',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useCreateProfileMutation,
} = profileAPI;
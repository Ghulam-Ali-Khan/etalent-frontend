import { privateAPI } from './index';

export const profileAPI = privateAPI.injectEndpoints({
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
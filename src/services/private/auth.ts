import { privateAPI } from './index';

export const authAPI = privateAPI.injectEndpoints({
  endpoints: build => ({
    logout: build.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
    loadUser: build.query({
      query: () => 'auth/user',
    }),
  }),
});

export const {
  useLogoutMutation,
  useLoadUserQuery,
  useLazyLoadUserQuery,
} = authAPI;
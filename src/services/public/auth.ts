import { publicAPI } from './index';

export const authAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: payload => ({
        url: 'auth/login',
        method: 'POST',
        body: {
          ...payload,
        },
      }),
    }),
    resetPasswordEmail: build.mutation({
      query: values => {
        const { email } = values;

        return {
          url: '/auth/forgotpassword',
          method: 'POST',
          body: { email },
        };
      },
    }),
    changeUserPassword: build.mutation({
      query: values => {
        const body = values;

        return {
          url: '/auth/pasword',
          method: 'PATCH',
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useResetPasswordEmailMutation, useChangeUserPasswordMutation } = authAPI;
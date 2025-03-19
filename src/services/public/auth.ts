import { publicAPI } from './index';

export const authAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: payload => ({
        url: '/Account/Logon',
        method: 'POST',
        body: {
          ...payload,
        },
      }),
     invalidatesTags: ['award_list', 'certification_list', 'education_list', 'education_experience_list',
        'project_list', 'experince_list', 'overview', 'portfolio_list', 'profile', 'publication_list', 'soft_skills', 'technical_skills']
    }),
    register: build.mutation({
      query: payload => ({
        url: '/Account/CandidateRegister',
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

export const { useLoginMutation, useRegisterMutation, useResetPasswordEmailMutation, useChangeUserPasswordMutation } = authAPI;
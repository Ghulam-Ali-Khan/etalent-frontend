import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const socialLinkAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createSocialLink: build.mutation({
      query: (body) => ({
        url: 'SocialLink',
        method: 'POST',
        body: {...body, userId},
      }),
    }),
    getAllSocialLinks: build.query({
      query: () => ({
        url: `SocialLink/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateSocialLinkMutation,
  useGetAllSocialLinksQuery
} = socialLinkAPI;
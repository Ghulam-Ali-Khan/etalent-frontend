import { publicAPI } from '../public/index';

export const socialLinkAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createSocialLink: build.mutation({
      query: (body) => ({
        url: 'SocialLink',
        method: 'POST',
        body: body,
      }),
    }),
    getAllSocialLinks: build.query({
      query: (id) => ({
        url: `SocialLink/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateSocialLinkMutation,
  useGetAllSocialLinksQuery
} = socialLinkAPI;
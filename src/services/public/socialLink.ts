import { publicAPI } from '../public/index';

export const socialLinkAPI = publicAPI.injectEndpoints({
  endpoints: build => ({
    createSocialLink: build.mutation({
      query: (body) => ({
        url: 'SocialLink',
        method: 'POST',
        body: { ...body, userId:localStorage.getItem('userId') },
      }),
    }),
    getAllSocialLinks: build.query({
      query: (id) => ({
        url: `SocialLink/${id || localStorage.getItem('userId')}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateSocialLinkMutation,
  useGetAllSocialLinksQuery
} = socialLinkAPI;
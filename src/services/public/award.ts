import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const awardAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createAward: build.mutation({
            query: (body) => ({
                url: 'Award',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['award_list']
        }),
        updateAward: build.mutation({
            query: (body) => ({
                url: 'Award',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['award_list']
        }),
        deleteAward: build.mutation({
            query: (id) => ({
                url: 'Award',
                method: 'Delete',
                body: { id, userId },
            }),
            invalidatesTags: ['award_list']
        }),
        getAllAward: build.query({
            query: (id) => ({
                url: `Award`,
                method: 'GET',
                params: {
                    userId: id || userId,
                }
            }),
            providesTags: ['award_list']
        }),
    }),
});

export const {
    useCreateAwardMutation,
    useGetAllAwardQuery,
    useUpdateAwardMutation,
    useDeleteAwardMutation
} = awardAPI;
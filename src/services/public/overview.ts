import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const overviewAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createOverview: build.mutation({
            query: (body) => ({
                url: 'Overview',
                method: 'POST',
                body: { ...body, userId },
            }),
            invalidatesTags: ['overview']
        }),
        updateOverview: build.mutation({
            query: (body) => ({
                url: 'Overview',
                method: 'PUT',
                body: { ...body, userId },
            }),
            invalidatesTags: ['overview']
        }),
        deleteOverview: build.mutation({
            query: () => ({
                url: 'Overview',
                method: 'Delete',
                body: { userId },
            }),
            invalidatesTags: ['overview']
        }),
        getOverview: build.query({
            query: (id) => ({
                url: `Overview`,
                method: 'GET',
                params: {
                    userId: id || userId,
                }
            }),
            providesTags: ['overview']
        }),
    }),
});

export const {
    useCreateOverviewMutation,
    useUpdateOverviewMutation,
    useGetOverviewQuery,
    useDeleteOverviewMutation
} = overviewAPI;
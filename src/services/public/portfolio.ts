import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const portfolioAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createPortfolio: build.mutation({
            query: (body) => ({
                url: 'Portfolio',
                method: 'POST',
                body: { ...body, userId },
            }),
            invalidatesTags: ['portfolio_list']
        }),
        updatePortfolio: build.mutation({
            query: (body) => ({
                url: `Portfolio`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['portfolio_list']
        }),
        deletePortfolio: build.mutation({
            query: (id) => ({
                url: `Portfolio`,
                method: 'Delete',
                body: {
                    id,
                    userId
                },
            }),
            invalidatesTags: ['portfolio_list']
        }),
        getAllPortfolio: build.query({
            query: () => ({
                url: `Portfolio`,
                method: 'GET',
                params: {
                    userId, currentId: userId
                }
            }),
            providesTags: ['portfolio_list']
        }),
    }),
});

export const {
    useUpdatePortfolioMutation,
    useCreatePortfolioMutation,
    useGetAllPortfolioQuery,
    useDeletePortfolioMutation
} = portfolioAPI;
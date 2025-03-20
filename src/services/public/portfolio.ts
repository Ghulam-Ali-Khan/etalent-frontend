import { publicAPI } from '../public/index';

// const userId = localStorage.getItem('userId');

export const portfolioAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createPortfolio: build.mutation({
            query: (body) => ({
                url: 'Portfolio',
                method: 'POST',
                body: { ...body, userId: localStorage.getItem('userId') },
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
                    userId: localStorage.getItem('userId')
                },
            }),
            invalidatesTags: ['portfolio_list']
        }),
        getAllPortfolio: build.query({
            query: (id) => ({
                url: `Portfolio`,
                method: 'GET',
                params: {
                    userId: id || localStorage.getItem('userId'),
                    currentId: id || localStorage.getItem('userId')
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
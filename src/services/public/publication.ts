import { publicAPI } from '../public/index';

// const userId = localStorage.getItem('userId');

export const publictionAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createPublication: build.mutation({
            query: (body) => ({
                url: 'Publication',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['publication_list']
        }),
        updatePublication: build.mutation({
            query: (body) => ({
                url: 'Publication',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['publication_list']
        }),
        deletePublication: build.mutation({
            query: (id) => ({
                url: 'Publication',
                method: 'Delete',
                body: { id, userId:  localStorage.getItem('userId') },
            }),
            invalidatesTags: ['publication_list']
        }),
        getAllPublications: build.query({
            query: (id) => ({
                url: `Publication`,
                method: 'GET',
                params: {
                    userId: id ||  localStorage.getItem('userId'),
                }
            }),
            providesTags: ['publication_list']
        }),
    }),
});

export const {
    useCreatePublicationMutation,
    useGetAllPublicationsQuery,
    useUpdatePublicationMutation,
    useDeletePublicationMutation
} = publictionAPI;
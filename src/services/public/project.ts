import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const projectAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createProject: build.mutation({
            query: (body) => ({
                url: 'Project',
                method: 'POST',
                body: { ...body, userId },
            }),
            invalidatesTags: ['project_list']
        }),
        updateProject: build.mutation({
            query: (body) => ({
                url: `Project`,
                method: 'PUT',
                body: { ...body, userId },
            }),
            invalidatesTags: ['project_list']
        }),
        deleteProject: build.mutation({
            query: (id) => ({
                url: `Project`,
                method: 'Delete',
                body: { id, userId },
            }),
            invalidatesTags: ['project_list']
        }),
        getAllProject: build.query({
            query: () => ({
                url: `Project`,
                method: 'GET',
                params: {
                    userId,
                }
            }),
            providesTags: ['project_list']
        }),
    }),
});

export const {
    useUpdateProjectMutation,
    useCreateProjectMutation,
    useGetAllProjectQuery,
    useDeleteProjectMutation
} = projectAPI;
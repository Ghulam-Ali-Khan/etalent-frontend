import { publicAPI } from '../public/index';

export const softSkillsAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createSoftSkill: build.mutation({
            query: (body) => ({
                url: 'SoftSkill',
                method: 'POST',
                body: [body],
            }),
            invalidatesTags: ['soft_skills']
        }),
        updateSoftSkill: build.mutation({
            query: (body) => ({
                url: 'SoftSkill',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['soft_skills']
        }),
        deleteSoftSkill: build.mutation({
            query: (id) => ({
                url: 'SoftSkill',
                method: 'Delete',
                body: {
                    id,
                    userId: localStorage.getItem('userId'),
                },
            }),
            invalidatesTags: ['soft_skills']
        }),
        getAllSoftSkills: build.query({
            query: (id) => ({
                url: `SoftSkill/${id || localStorage.getItem('userId')}`,
                method: 'GET',
            }),
            providesTags: ['soft_skills']
        }),
    }),
});

export const {
    useCreateSoftSkillMutation,
    useGetAllSoftSkillsQuery,
    useUpdateSoftSkillMutation,
    useDeleteSoftSkillMutation
} = softSkillsAPI;
import { publicAPI } from '../public/index';

export const technicalSkillsAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createTechnicalSkill: build.mutation({
            query: (body) => ({
                url: 'TechnicalSkill',
                method: 'POST',
                body: [body],
            }),
            invalidatesTags: ['technical_skills']
        }),
        updateTechnicalSkill: build.mutation({
            query: (body) => ({
                url: 'TechnicalSkill',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['technical_skills']
        }),
        deleteTechnicalSkill: build.mutation({
            query: (id) => ({
                url: 'TechnicalSkill',
                method: 'Delete',
                body: {
                    id,
                    userId: localStorage.getItem('userId')
                },
            }),
            invalidatesTags: ['technical_skills']
        }),
        getAllTechnicalSkills: build.query({
            query: (id) => ({
                url: `TechnicalSkill`,
                method: 'GET',
                params: {
                    userId: id || localStorage.getItem('userId'),
                }
            }),
            providesTags: ['technical_skills']
        }),
    }),
});

export const {
    useCreateTechnicalSkillMutation,
    useGetAllTechnicalSkillsQuery,
    useUpdateTechnicalSkillMutation,
    useDeleteTechnicalSkillMutation
} = technicalSkillsAPI;
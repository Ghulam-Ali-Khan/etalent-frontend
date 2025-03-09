import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

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
        getAllTechnicalSkills: build.query({
            query: () => ({
                url: `TechnicalSkill`,
                method: 'GET',
                params: {
                    userId: userId,
                }
            }),
            providesTags: ['technical_skills']
        }),
    }),
});

export const {
    useCreateTechnicalSkillMutation,
    useGetAllTechnicalSkillsQuery,
    useUpdateTechnicalSkillMutation
} = technicalSkillsAPI;
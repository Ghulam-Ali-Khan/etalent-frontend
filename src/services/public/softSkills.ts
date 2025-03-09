import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

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
        getAllSoftSkills: build.query({
            query: () => ({
                url: `SoftSkill/${userId}`,
                method: 'GET',
            }),
            providesTags: ['soft_skills']
        }),
    }),
});

export const {
    useCreateSoftSkillMutation,
    useGetAllSoftSkillsQuery,
    useUpdateSoftSkillMutation
} = softSkillsAPI;
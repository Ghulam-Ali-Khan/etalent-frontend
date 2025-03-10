import { publicAPI } from '../public/index';

const userId = localStorage.getItem('userId');

export const certificationsAPI = publicAPI.injectEndpoints({
    endpoints: build => ({
        createCertification: build.mutation({
            query: (body) => ({
                url: 'CertificationAndTraining',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['certification_list']
        }),
        updateCertification: build.mutation({
            query: (body) => ({
                url: 'CertificationAndTraining',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['certification_list']
        }),
        deleteCertification: build.mutation({
            query: (id) => ({
                url: 'CertificationAndTraining',
                method: 'Delete',
                body: { id, userId },
            }),
            invalidatesTags: ['certification_list']
        }),
        getAllCertification: build.query({
            query: (id) => ({
                url: `CertificationAndTraining`,
                method: 'GET',
                params: {
                   userId: id || userId,
                }
            }),
            providesTags: ['certification_list']
        }),
    }),
});

export const {
    useCreateCertificationMutation,
    useGetAllCertificationQuery,
    useUpdateCertificationMutation,
    useDeleteCertificationMutation
} = certificationsAPI;
import CommonModal from '@/components/common/CommonModal';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import useShowResponse from '@/customHooks/useShowResponse';
import { useCreatePublicationMutation, useUpdatePublicationMutation } from '@/services/public/publication';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useEffect, useState } from 'react'
import { publicationInitialValues, publicationValidationSchema } from '../utilis/formUtilis';
import { Add, Edit } from '@mui/icons-material';

const PublicationModal = ({ isModalTxt, singleData }: { isModalTxt?: boolean, singleData?: object }) => {
    const userStoredData = localStorage.getItem('userData');
    const userData = JSON.parse(userStoredData);

    const [formValues, setFormValues] = useState(publicationInitialValues);
    const [isModalOpen, setModalStatus] = useState(false);

    console.log('singleData ==> ', userData)

    const [createPublication] = useCreatePublicationMutation();
    const [updatePublication] = useUpdatePublicationMutation();

    const { showResponse } = useShowResponse();

    const handleSubmit = async (values: any) => {
        let response = {};
        const userId = localStorage.getItem('userId');

        if (singleData) {
            response = await updatePublication({ ...values, userId });
        } else {
            response = await createPublication({ ...values, userId });
        }

        showResponse(response?.data, `Publication ${singleData ? 'updated' : 'added'} successfully`, 'Publication process failed', () => setModalStatus(false))
    }

    useEffect(() => {
        if (singleData) {
            setFormValues({
                ...publicationInitialValues,
                ...singleData,
            });
        }
    }, [singleData]);

    return (
        <>
            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Publications
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        {singleData ? <Edit /> : <Add />}
                    </IconButton>
                )
            }

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title={`${singleData ? 'Update' : 'Add'} Publications`}>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={formValues} formSchema={publicationValidationSchema} submitFunc={handleSubmit}>
                        <Stack spacing={2}>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='title'
                                            label='Title'
                                            isRequired
                                        />

                                        <FormikField
                                            name='authorName'
                                            label='Author Name'
                                        />
                                    </Stack>
                                </Grid2>

                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='publisherName'
                                            label='Publisher Name'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='publicationDate'
                                            label='Publication Date'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                            </Grid2>

                            <Box my={3}>
                                <FormikField name='url' label='Publish Url' />
                            </Box>

                            <FormikTextEditor
                                name='description'
                            />

                            <Stack direction={'row'} justifyContent={'end'} spacing={2}>
                                <Button variant='outlined'>
                                    Cancel
                                </Button>
                                <Button type='submit' variant='contained'>
                                    {singleData ? 'Update' : 'Add'}
                                </Button>
                            </Stack>
                        </Stack>
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    )
}

export default PublicationModal

import CommonModal from '@/components/common/CommonModal';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import useShowResponse from '@/customHooks/useShowResponse';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useEffect, useState } from 'react'
import { awardInitialValues, awardValidationSchema } from '../utilis/formUtilis';
import { Add, Edit } from '@mui/icons-material';
import { useCreateAwardMutation, useUpdateAwardMutation } from '@/services/public/award';

const AwardModal = ({ isModalTxt, singleData }: { isModalTxt?: boolean, singleData?: object }) => {
    const [formValues, setFormValues] = useState(awardInitialValues);
    const [isModalOpen, setModalStatus] = useState(false);

    const [createAward] = useCreateAwardMutation();
    const [updateAward] = useUpdateAwardMutation();

    const { showResponse } = useShowResponse();

    const handleSubmit = async (values: any) => {
        let response = {};
        const userId = localStorage.getItem('userId');

        if (singleData) {
            response = await updateAward({ ...values, userId });
        } else {
            response = await createAward({ ...values, userId });
        }

        showResponse(response?.data, `Award ${singleData ? 'updated' : 'added'} successfully`, 'Award process failed', () => setModalStatus(false))
    }

    useEffect(() => {
        if (singleData) {
            setFormValues({
                ...awardInitialValues,
                ...singleData,
            });
        }
    }, [singleData]);

    return (
        <>
            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Awards
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        {singleData ? <Edit /> : <Add />}
                    </IconButton>
                )
            }

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title={`${singleData ? 'Update' : 'Add'} Awards`}>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={formValues} formSchema={awardValidationSchema} submitFunc={handleSubmit}>
                        <Stack spacing={2}>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                        <FormikField
                                            name='title'
                                            label='Award Title'
                                            isRequired
                                        />
                                </Grid2>

                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                        <FormikField
                                            name='issuer'
                                            label='Award Issuer'
                                            isRequired
                                        />
                                </Grid2>
                            </Grid2>

                            <Box my={3}>
                                <FormikDatePicker name='issuingDate' label='Issue Date'  isRequired/>
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

export default AwardModal

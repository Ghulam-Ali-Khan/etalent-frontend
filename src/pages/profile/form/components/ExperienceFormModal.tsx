import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import useShowResponse from '@/customHooks/useShowResponse';
import { useCreateExperienceMutation } from '@/services/public/experience';
import { Add } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useState } from 'react'
import { experienceInitialValues, experienceValidationSchema } from '../../utilis/formUtilis';

const ExperienceFormModal = ({ isModalTxt }) => {

    const [isModalOpen, setModalStatus] = useState(false);

    const { showResponse } = useShowResponse()

    const [createExperience] = useCreateExperienceMutation();

    const handleSubmit = async (values: any) => {
        const userId = localStorage.getItem('userId');
        const response = await createExperience({ ...values, userId });

        showResponse(response?.data, 'Experience added successfully', 'Experience process failed', () => setModalStatus(false))
    }


    return (
        <>
            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Experience
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        <Add />
                    </IconButton>
                )
            }

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Experience'>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={experienceInitialValues} formSchema={experienceValidationSchema} submitFunc={handleSubmit}>
                        <Stack spacing={2}>

                            <FormikField
                                name='title'
                                label='Title'
                                isRequired
                            />

                            <FormikField
                                name='employmentType'
                                label='Employeement Type'
                                isRequired
                            />

                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='company'
                                            label='Company'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='city'
                                            label='City/State'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='industry'
                                            label='Industry'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='country'
                                            label='Country'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                            </Grid2>
                            <Box my={3}>
                                <FormikCheckbox
                                    name='currentlyWorking'
                                    label='Currently Working'
                                />
                            </Box>

                            <FormikTextEditor
                                name='description'
                            />


                            <Stack direction={'row'} justifyContent={'end'} spacing={2}>
                                <Button variant='outlined'>
                                    Cancel
                                </Button>
                                <Button type='submit' variant='contained'>
                                    Add
                                </Button>
                            </Stack>
                        </Stack>
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    )
}

export default ExperienceFormModal

import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import FormikWrapper from '@/components/form/FormikWrapper';
import { useCreateEducationMutation } from '@/services/public/education';
import { countriesOptions } from '@/utilis/helpers';
import { Add } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useState } from 'react'
import { educationInitialValues, educationValidationSchema } from '../../utilis/formUtilis';

const EducationFormModal = () => {

    const [isModalOpen, setModalStatus] = useState(false);

    const [createEducation] = useCreateEducationMutation();

    const handleSubmit = async (values: any) => {
        const userId = localStorage.getItem('userId');
        await createEducation({ ...values, userId });
    }

    return (
        <>
            <IconButton onClick={() => setModalStatus(true)}>
                <Add />
            </IconButton>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Education'>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={educationInitialValues} formSchema={educationValidationSchema} submitFunc={handleSubmit}>
                        <>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='school'
                                            label='University'
                                            isRequired
                                        />

                                        <FormikField
                                            name='degree'
                                            label='Degree'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='startDate'
                                            label='Start Date'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='schoolUrl'
                                            label='School / University URL'
                                            isRequired
                                        />

                                        <FormikField
                                            name='fieldOfStudy'
                                            label='Field of study'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='endDate'
                                            label='End Date'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                            </Grid2>
                            <Box my={3}>
                                <FormikCheckbox
                                    name='currentlyEnrolled'
                                    label='Currently Enrolled'
                                />
                            </Box>

                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='grade'
                                            label='Grade/CGPA'
                                            isRequired
                                        />

                                        <FormikField
                                            name='city'
                                            label='City'
                                            isRequired
                                        />

                                        <FormikAutoCompleteSelect
                                            name='country'
                                            label='Country'
                                            options={countriesOptions}
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='state'
                                            label='Province/State'
                                            isRequired
                                        />

                                    </Stack>
                                </Grid2>
                            </Grid2>


                            <Stack direction={'row'} justifyContent={'end'} spacing={2}>
                                <Button variant='outlined'>
                                    Cancel
                                </Button>
                                <Button variant='contained' type='submit'>
                                    Add
                                </Button>
                            </Stack>
                        </>
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    )
}

export default EducationFormModal

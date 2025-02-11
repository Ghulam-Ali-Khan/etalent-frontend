import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Add } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useState } from 'react'

const EducationFormModal = () => {

    const [isModalOpen, setModalStatus] = useState(false);

    return (
        <>
            <IconButton onClick={() => setModalStatus(true)}>
                <Add />
            </IconButton>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Education'>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={{}} submitFunc={() => { }}>
                        <>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='university'
                                            label='University'
                                            isRequired
                                        />

                                        <FormikField
                                            name='degree'
                                            label='Degree'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='start_date'
                                            label='Start Date'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='university'
                                            label='School / University URL'
                                            isRequired
                                        />

                                        <FormikField
                                            name='study'
                                            label='Field of study'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='end_date'
                                            label='End Date'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                            </Grid2>
                            <Box my={3}>
                                <FormikCheckbox
                                    name='enrolled'
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

                                        <FormikDatePicker
                                            name='country'
                                            label='Country'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='province'
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
                                <Button variant='contained'>
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

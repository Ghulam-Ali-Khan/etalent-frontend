import CommonModal from '@/components/common/CommonModal';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Add } from '@mui/icons-material';
import { Box, Grid2, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react'

const ExperienceFormModal = () => {

    const [isModalOpen, setModalStatus] = useState(false);

    return (
        <>
            <IconButton onClick={() => setModalStatus(true)}>
                <Add />
            </IconButton>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Education'>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={{}} submitFunc={() => { }}>
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
                                </Stack>
                            </Grid2>
                        </Grid2>
                    </FormikWrapper>
                    Ghulam Ali
                </Box>
            </CommonModal>
        </>
    )
}

export default ExperienceFormModal

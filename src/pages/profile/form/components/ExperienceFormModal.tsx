import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Add } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useState } from 'react'

const ExperienceFormModal = () => {

    const [isModalOpen, setModalStatus] = useState(false);

    return (
        <>
            <IconButton onClick={() => setModalStatus(true)}>
                <Add />
            </IconButton>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Experience'>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={{}} submitFunc={() => { }}>
                        <Stack spacing={2}>

                            <FormikField
                                name='title'
                                label='Title'
                                isRequired
                            />

                            <FormikField
                                name='employement_type'
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
                                    name='working'
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
                                <Button variant='contained'>
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

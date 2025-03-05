import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Box, Button, Grid2, Stack } from '@mui/material';
import React, { useState } from 'react'
import SkillsInput from './AddSkillsField';
import FormikSkillsInput from '@/components/form/FormikSkillsInput';

const ProjectModal = () => {
    const [isModalOpen, setModalStatus] = useState(false);
    return (
        <>

            <Box onClick={() => setModalStatus(true)} className="w-full">
                Projects
            </Box>


            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Project'>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={{}} submitFunc={() => { }}>
                        <Stack spacing={2}>

                            <FormikField
                                name='projectName'
                                label='Project Name'
                                isRequired
                            />

                            <Box my={3}>
                                <FormikCheckbox name='projectCurrentlyWorking' label='Currently working' />
                            </Box>

                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikDatePicker
                                            name='projectStartDate'
                                            label='Start Date'
                                            isRequired
                                        />

                                        <FormikAutoCompleteSelect
                                            name='accociatedWithExperience'
                                            label='Associate with experience'
                                            options={[]}
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikDatePicker
                                            name='projectEndDate'
                                            label='End Date'
                                            isRequired
                                        />

                                        <FormikAutoCompleteSelect
                                            name='accociatedWithEducation'
                                            label='Associate with education'
                                            options={[]}
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                            </Grid2>


                            <Box my={3}>
                                <FormikCheckbox name='accociatedWithFreelance' label='Associated with freelance' />
                            </Box>

                            <FormikSkillsInput name={'porfolioTechnicalSkills'} label={'Technical Skill'} />

                            <FormikField name='projectUrl' label='Project Url' />

                            <FormikTextEditor
                                name='projectDescription'
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

export default ProjectModal

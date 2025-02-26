import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import useShowResponse from '@/customHooks/useShowResponse';
import { useCreateTechnicalSkillMutation } from '@/services/public/technicalSkills';
import { Add } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useState } from 'react'
import { technicalSkillsInitialValues, technicalSkillsSchema } from '../../utilis/formUtilis';

const TechnicalSkillsPopup = () => {
    // states
    const [isModalOpen, setModalStatus] = useState(false);

    // queries and mutations
    const [createTechnicalSkill] = useCreateTechnicalSkillMutation();

    // Custom Hook
    const { showResponse } = useShowResponse();

    // handlers
    const handleSubmit = async (values: any) => {
        const userId = localStorage.getItem('userId');
        const response = await createTechnicalSkill({ ...values, userId });

        showResponse(response?.data, 'Technical skill added successfully', 'Technical skill process failed', () => setModalStatus(false))
    }

    return (
        <>
            <IconButton onClick={() => setModalStatus(true)}>
                <Add />
            </IconButton>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Technical Skill' minWidth='400px'>
                <Box minWidth={'400px'}>
                    <FormikWrapper formInitials={technicalSkillsInitialValues} formSchema={technicalSkillsSchema} submitFunc={handleSubmit}>
                        <Stack spacing={2}>
                            <FormikField
                                name='name'
                                label='Skill'
                                isRequired
                            />

                            <FormikField
                                name='experience'
                                label='Experience in years'
                                isRequired
                            />


                            <Stack direction={'row'} justifyContent={'end'} spacing={2} >
                                <Button variant='outlined' onClick={()=> setModalStatus(false)}>
                                    Cancel
                                </Button>
                                <Button variant='contained' type='submit'>
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

export default TechnicalSkillsPopup

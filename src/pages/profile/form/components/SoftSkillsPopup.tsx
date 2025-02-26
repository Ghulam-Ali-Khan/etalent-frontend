import CommonModal from '@/components/common/CommonModal';
import FormikField from '@/components/form/FormikField';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Add } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { useState } from 'react'
import { softSkillsInitialValues, softSkillsSchema } from '../../utilis/formUtilis';
import { useCreateSoftSkillMutation } from '@/services/public/softSkills';
import useShowResponse from '@/customHooks/useShowResponse';

const SoftSkillsPopup = () => {
    const [isModalOpen, setModalStatus] = useState(false);

    // queries and mutations
    const [createSoftSkill] = useCreateSoftSkillMutation();

    // Custom Hook
    const { showResponse } = useShowResponse();

    // handlers
    const handleSubmit = async (values: any) => {
        const userId = localStorage.getItem('userId');
        const response = await createSoftSkill({ ...values, userId });

        showResponse(response?.data, 'Soft skill added successfully', 'Soft skill process failed', () => setModalStatus(false))
    }

    return (
        <>
            <IconButton onClick={() => setModalStatus(true)}>
                <Add />
            </IconButton>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Soft Skill' minWidth='400px'>
                <Box minWidth={'400px'}>
                    <FormikWrapper formInitials={softSkillsInitialValues} formSchema={softSkillsSchema} submitFunc={handleSubmit}>
                        <Stack spacing={2}>

                            <FormikField
                                name='name'
                                label='Skill'
                                isRequired
                            />


                            <Stack direction={'row'} justifyContent={'end'} spacing={2}>
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

export default SoftSkillsPopup

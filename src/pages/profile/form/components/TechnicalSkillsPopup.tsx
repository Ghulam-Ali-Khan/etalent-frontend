import CommonModal from '@/components/common/CommonModal';
import FormikField from '@/components/form/FormikField';
import FormikWrapper from '@/components/form/FormikWrapper';
import useShowResponse from '@/customHooks/useShowResponse';
import { useCreateTechnicalSkillMutation, useUpdateTechnicalSkillMutation } from '@/services/public/technicalSkills';
import { Add, Edit } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useEffect, useMemo, useState } from 'react'
import { technicalSkillsInitialValues, technicalSkillsSchema } from '../../utilis/formUtilis';
import SkillsField from './SkillsField';

const TechnicalSkillsPopup = ({ isModalTxt, singleData }: { isModalTxt?: boolean, singleData?: object }) => {
    // states
    const [formValues, setFormValues] = useState(technicalSkillsInitialValues)
    const [isModalOpen, setModalStatus] = useState(false);

    // queries and mutations
    const [createTechnicalSkill] = useCreateTechnicalSkillMutation();
    const [updateTechnicalSkill] = useUpdateTechnicalSkillMutation();

    // Custom Hook
    const { showResponse } = useShowResponse();

    // Handlers
    const handleSubmit = async (values: any) => {
        let response = {};
        const userId = localStorage.getItem('userId');

        if (singleData) {
            response = await updateTechnicalSkill({ ...values, userId });
        } else {
            response = await createTechnicalSkill({ ...values, userId });
        }

        showResponse(response?.data, `Technical skill ${singleData ? 'updated' : 'added'} successfully`, 'Technical skill process failed', () => setModalStatus(false))
    }

    // Values updation on edit
    useEffect(() => {
        if (singleData) {
            const { userId, id, name, experience } = singleData;
            setFormValues({ userId, id, name, experience });
        }
    }, [singleData]);

    return (
        <>
            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Technical Skill
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        {singleData ? <Edit /> : <Add />}
                    </IconButton>
                )
            }

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title={`${singleData ? 'Update' : 'Add'} Technical Skill`} minWidth='400px'>
                <Box minWidth={'400px'}>
                    <FormikWrapper formInitials={formValues} formSchema={technicalSkillsSchema} submitFunc={handleSubmit}>
                        <Stack spacing={2}>
                            <SkillsField />
                            <FormikField
                                name='experience'
                                label='Experience in years'
                                isRequired
                            />


                            <Stack direction={'row'} justifyContent={'end'} spacing={2} >
                                <Button variant='outlined' onClick={() => setModalStatus(false)}>
                                    Cancel
                                </Button>
                                <Button variant='contained' type='submit'>
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

export default TechnicalSkillsPopup

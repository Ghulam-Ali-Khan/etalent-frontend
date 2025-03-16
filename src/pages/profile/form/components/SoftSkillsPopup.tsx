import CommonModal from '@/components/common/CommonModal';
import FormikField from '@/components/form/FormikField';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Add, Edit } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { useEffect, useState } from 'react'
import { softSkillsInitialValues, softSkillsSchema } from '../../utilis/formUtilis';
import { useCreateSoftSkillMutation, useUpdateSoftSkillMutation } from '@/services/public/softSkills';
import useShowResponse from '@/customHooks/useShowResponse';
import SkillsField from './SkillsField';

const SoftSkillsPopup = ({ isModalTxt, singleData }: { isModalTxt?: boolean, singleData?: object }) => {
    const [formValues, setFormValues] = useState(softSkillsInitialValues);
    const [isModalOpen, setModalStatus] = useState(false);

    // queries and mutations
    const [createSoftSkill] = useCreateSoftSkillMutation();
    const [updateSoftSkill] = useUpdateSoftSkillMutation();

    // Custom Hook
    const { showResponse } = useShowResponse();

    // Handlers
    const handleSubmit = async (values: any) => {
        let response = {};
        const userId = localStorage.getItem('userId');

        if (singleData) {
            response = await updateSoftSkill({ ...values, userId });
        } else {
            response = await createSoftSkill({ ...values, userId });
        }

        showResponse(response?.data, `Soft skill ${singleData ? 'updated' : 'added'} successfully`, 'Soft skill process failed', () => setModalStatus(false))
    }

    // Values updation on edit
    useEffect(() => {
        if (singleData) {
            const { userId, id, name } = singleData;
            setFormValues({ userId, id, name });
        }
    }, [singleData]);


    return (
        <>
            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Soft Skill
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        {singleData ? <Edit /> : <Add />}
                    </IconButton>
                )
            }

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title={`${singleData ? 'Update' : 'Add'} Soft Skill`} minWidth='400px'>
                <Box minWidth={'400px'}>
                    <FormikWrapper formInitials={formValues} formSchema={softSkillsSchema} submitFunc={handleSubmit}>
                        <Stack spacing={2}>

                            <SkillsField />

                            <Stack direction={'row'} justifyContent={'end'} spacing={2}>
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

export default SoftSkillsPopup

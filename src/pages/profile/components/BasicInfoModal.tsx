import { useEffect, useState } from 'react';
import CommonModal from '@/components/common/CommonModal';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { companyInfoStepInitials } from '../utilis/formUtilis';
import { Add, Edit } from '@mui/icons-material';
import useShowResponse from '@/customHooks/useShowResponse';
import CompanyInfoStep from '../form/components/CompanyInfoStep';
import AddressStep from '../form/components/AddressStep';
import { useGetPorfileQuery, useUpdateProfileMutation } from '@/services/public/profile';

const BasicInfoModal = ({ isModalTxt, singleData, isFreelance }: { isModalTxt?: boolean, singleData?: object, isFreelance?: boolean }) => {
    const [isModalOpen, setModalStatus] = useState(false);
    const [formValues, setFormValues] = useState(companyInfoStepInitials);

    const userId = localStorage.getItem('userId');

    // Mutations & queres
    const { data: userProfileData } = useGetPorfileQuery(userId);
    const [updateProfile] = useUpdateProfileMutation();

    // Custom Hooks
    const { showResponse } = useShowResponse()

    const handleSubmitForm = async (values: any) => {
        const response = await updateProfile(values);

        showResponse(response?.data, `Basic info ${singleData ? 'updated' : 'added'} successfully`, 'Basic info process failed', () => setModalStatus(false))

    };

    // UseEffects
    useEffect(() => {
        if (userProfileData?.data) {
            setFormValues(({ ...companyInfoStepInitials, ...userProfileData?.data }));
        }
    }, [userProfileData])

    return (
        <>
            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Basic Info
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        {singleData ? <Edit /> : <Add />}
                    </IconButton>
                )
            }

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title={'Update Project'}>
                <Box minWidth={'100%'}>
                    <FormikWrapper
                        formInitials={formValues}
                        submitFunc={handleSubmitForm}
                    >
                        <>
                            <CompanyInfoStep noStep />
                            <br />
                            <AddressStep noStep />

                            <Stack direction={'row'} justifyContent={'end'} gap={2} mt={2}>
                                <Button variant='outlined' onClick={() => setModalStatus(false)}>
                                    Cancel
                                </Button>

                                <Button type='submit' variant='contained'>
                                    Update
                                </Button>
                            </Stack>
                        </>
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    );
};

export default BasicInfoModal;

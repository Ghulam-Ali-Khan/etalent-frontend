import { useEffect, useState } from 'react';
import CommonModal from '@/components/common/CommonModal';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { companyInfoStepInitials, overviewInitialValues } from '../utilis/formUtilis';
import { Add, Edit } from '@mui/icons-material';
import useShowResponse from '@/customHooks/useShowResponse';
import CompanyInfoStep from '../form/components/CompanyInfoStep';
import AddressStep from '../form/components/AddressStep';
import { useGetPorfileQuery, useUpdateProfileMutation } from '@/services/public/profile';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import { useCreateOverviewMutation, useGetOverviewQuery, useUpdateOverviewMutation } from '@/services/public/overview';

const OverviewModal = ({ isModalTxt }: { isModalTxt?: boolean}) => {
    const [isModalOpen, setModalStatus] = useState(false);
    const [formValues, setFormValues] = useState(overviewInitialValues)

    // Mutations & queres
    const { data: overviewData } = useGetOverviewQuery(null);
    const [createOverview] = useCreateOverviewMutation();
    const [updateOverview] = useUpdateOverviewMutation();

    const isEdit = overviewData?.data;

    // Custom Hooks
    const { showResponse } = useShowResponse()

    const handleSubmitForm = async (values: any) => {
        let response = {};

        if (isEdit) {
            response = await updateOverview(values);
        } else {
            response = await createOverview(values);
        }

        showResponse(response?.data, `Overview ${isEdit ? 'updated' : 'added'} successfully`, 'Overview process failed', () => setModalStatus(false))

    };

    // UseEffects
    useEffect(() => {
        if (isEdit) {
            setFormValues(({ ...overviewData?.data }));
        }
    }, [overviewData])

    return (
        <>
            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Overview
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        {isEdit ? <Edit /> : <Add />}
                    </IconButton>
                )
            }

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title={`${isEdit ? 'Update' : 'Add'} Overview`}>
                <Box minWidth={'100%'} className="min-height-ck">
                    <FormikWrapper
                        formInitials={formValues}
                        submitFunc={handleSubmitForm}
                    >
                        <>
                            <FormikTextEditor name='overviewDetail' />

                            <Stack direction={'row'} justifyContent={'end'} gap={2} mt={2}>
                                <Button variant='outlined' onClick={() => setModalStatus(false)}>
                                    Cancel
                                </Button>

                                <Button type='submit' variant='contained'>
                                    {isEdit ? 'Update' : 'Add'}
                                </Button>
                            </Stack>
                        </>
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    );
};

export default OverviewModal;

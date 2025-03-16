import CommonModal from '@/components/common/CommonModal';
import DropzoneFileUploader from '@/components/form/DropzoneFileUploader';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Add, Edit } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useFormikContext } from 'formik';
import moment from 'moment';
import { useEffect, useState } from 'react'
import { certificateInitialValues, certificateValidationSchema } from '../utilis/formUtilis';
import { convertFileToBase64 } from '@/utilis/helpers';
import useShowResponse from '@/customHooks/useShowResponse';
import { useCreateCertificationMutation, useUpdateCertificationMutation } from '@/services/public/certifications';

const CretificationsAndTrainings = ({ isModalTxt, singleData }: { isModalTxt?: boolean, singleData?: object }) => {
    const [formValues, setFormValues] = useState(certificateInitialValues);
    const [isModalOpen, setModalStatus] = useState(false);

    const [createCertificate] = useCreateCertificationMutation();
    const [updateCertificate] = useUpdateCertificationMutation();

    const { showResponse } = useShowResponse();

    const handleSubmit = async (values: any) => {
        let response = {};
        const userId = localStorage.getItem('userId');

        if (singleData) {
            response = await updateCertificate({ ...values, userId });
        } else {
            response = await createCertificate({ ...values, userId });
        }

        showResponse(response?.data, `Certification ${singleData ? 'updated' : 'added'} successfully`, 'Certification process failed', () => setModalStatus(false))
    }

    useEffect(() => {
        if (singleData) {
            setFormValues({
                ...certificateInitialValues,
                ...singleData,
            });
        }
    }, [singleData]);

    return (
        <>

            {
                isModalTxt ? (
                    <Box onClick={() => setModalStatus(true)} className="w-full">
                        Certifcations & Trainings
                    </Box>
                ) : (
                    <IconButton onClick={() => setModalStatus(true)}>
                        {singleData ? <Edit /> : <Add />}
                    </IconButton>
                )
            }


            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title={`${singleData ? 'Update' : 'Add'} Certifcations & Trainings`}>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={formValues} formSchema={certificateValidationSchema} submitFunc={handleSubmit}>
                        <CertificationForm />
                        <Stack direction={'row'} justifyContent={'end'} spacing={2}>
                            <Button variant='outlined' onClick={() => setModalStatus(false)}>
                                Cancel
                            </Button>
                            <Button type='submit' variant='contained'>
                                {singleData ? 'Update' : 'Add'}
                            </Button>
                        </Stack>
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    )
}

export default CretificationsAndTrainings;

const CertificationForm = () => {
    const { values, setFieldValue } = useFormikContext();

    // handlers
    const handleFileUpload = async (file: File) => {
        console.log('Uploaded file:', file);
        try {
            const base64String = await convertFileToBase64(file);

            setFieldValue('artifactUrl', base64String);
        } catch (error) {
            console.error('Error converting file to Base64:', error);
        }
    };

    return (
        <Stack spacing={2}>

            <Grid2 container spacing={2}>
                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Stack spacing={2}>
                        <FormikField
                            name='title'
                            label='Name'
                            isRequired
                        />


                        <FormikField
                            name='organizationName'
                            label='Issuing Organization Name'
                            isRequired
                        />

                        <FormikDatePicker
                            name='issueDate'
                            label='Issue Date'
                            isRequired
                        />

                        <FormikField
                            name='score'
                            label='Score'
                            type='number'
                        />
                    </Stack>
                </Grid2>

                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Stack spacing={2}>
                        <FormikField
                            name='certificationId'
                            label='Certification ID'
                        />

                        <FormikField name='organizationUrl' label='Issuing Organization URL' />

                        <FormikDatePicker
                            name='expireDate'
                            label='End Date'
                            minDate={moment(values?.issueDate)}
                            isDisable={values?.doesntExpire}
                            isRequired
                        />
                        <Box pt={4}>
                            <FormikCheckbox name='doesntExpire' label='This credential does not expire' />
                        </Box>
                    </Stack>
                </Grid2>
            </Grid2>

            <Stack my={3}>
                <DropzoneFileUploader label="Upload your File" onFileUpload={handleFileUpload} />
            </Stack>
        </Stack>
    );
}

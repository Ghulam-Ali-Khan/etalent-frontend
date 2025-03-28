import { Button, Grid2, Stack } from '@mui/material';
import { Form, Formik } from 'formik'
import { useState } from 'react'
import StepperFormSteps from './StepperFormSteps';
import CompanyInfoStep from './CompanyInfoStep';
import AddressStep from './AddressStep';
import ExperienceStep from './ExperienceStep';
import LinksStep from './LinksStep';
import SkillsStep from './SkillsStep';
import EducationStep from './EducationStep';
import { companyInfoStepInitials, stepsValidations } from '../../utilis/formUtilis';
import { useCreateProfileMutation } from '@/services/public/profile';
import ReviewApplication from './ReviewApplication';
import { isEmptyObject } from '@/utilis/helpers';
import useShowResponse from '@/customHooks/useShowResponse';
import { useNavigate } from 'react-router-dom';
import { useCreateSocialLinkMutation } from '@/services/public/socialLink';

const StepperForm = () => {
    const [step, setStep] = useState(4);

    const navigate = useNavigate();

    const { showResponse } = useShowResponse();

    const [createProfileMutation] = useCreateProfileMutation();
    const [createSocialLinks] = useCreateSocialLinkMutation();

    // handlers
    const handleSubmit = async (values: any) => {
        if (step === 6) {
            const { facebook, twitter, instagram, linkedin } = values;
            let response = {};

            const userId = localStorage.getItem("userId");


            response = await createProfileMutation({ ...values, userId, });
            await createSocialLinks({ facebook, twitter, instagram, linkedin });

            showResponse(response?.data, `Profile created successfully`, 'Experience process failed', () => navigate('/portal/profile/'))

        }
    };


    return (
        <Formik initialValues={companyInfoStepInitials} validationSchema={stepsValidations[step]} onSubmit={handleSubmit}>
            {({ submitForm, validateForm, setTouched }) => (
                <Form>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xl: 3, lg: 3, md: 3, }} minHeight={'85vh'}>
                            <StepperFormSteps step={step} />
                        </Grid2>

                        <Grid2 size={{ xl: 9, lg: 9, md: 9, sm: 12, xs: 12 }} padding={2}>
                            {step === 0 && <CompanyInfoStep />}
                            {step === 1 && <AddressStep />}
                            {step === 2 && <EducationStep />}
                            {step === 3 && <ExperienceStep />}
                            {step === 4 && <SkillsStep />}
                            {step === 5 && <LinksStep />}
                            {step === 6 && <ReviewApplication />}

                            <Stack direction={'row'} justifyContent={'space-between'} mt={4}>

                                <Button variant='outlined'
                                    onClick={() => {
                                        if (step > 0) {
                                            setStep(prev => prev - 1)
                                        }
                                    }}
                                >
                                    Back
                                </Button>
                                <Button variant='contained'
                                    onClick={async () => {
                                        const response = await validateForm();

                                        console.log('response ==> ', response);

                                        if (isEmptyObject(response)) {
                                            if (step <= 5) {
                                                setStep(prev => 1 + prev)
                                            } else {
                                                submitForm();
                                            }
                                        } else {
                                            setTouched(response);
                                        }
                                    }}
                                >
                                    {step >= 6 ? 'Submit' : 'Next'}
                                </Button>
                            </Stack>
                        </Grid2>
                    </Grid2>
                </Form>
            )}
        </Formik>
    )
}

export default StepperForm

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

const StepperForm = () => {
    const [step, setStep] = useState(6);

    const [createProfileMutation] = useCreateProfileMutation();

    // handlers
    const handleSubmit = async (values: any) => {
        if (step === 6) {
            const userId = localStorage.getItem("userId");
    
            // Create a FormData instance
            const formData = new FormData();
    
            // Append all values to FormData
            Object.entries(values).forEach(([key, value]) => {
                if (value instanceof File) {
                    // If value is a File (for file uploads)
                    formData.append(key, value);
                } else if (Array.isArray(value)) {
                    // If value is an array (e.g., multiple files or selected options)
                    value.forEach((item, index) => {
                        formData.append(`${key}[${index}]`, item);
                    });
                } else {
                    // Convert other values to strings and append
                    formData.append(key, value?.toString() || "");
                }
            });
    
            // Append userId separately
            if (userId) {
                formData.append("userId", userId);
            }
    
            // Call your mutation
            await createProfileMutation(formData);
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
                                        }else{
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

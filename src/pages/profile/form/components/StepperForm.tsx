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

const StepperForm = () => {
    const [step, setStep] = useState(0);
    return (
        <Formik initialValues={{}} onSubmit={() => { }}>
            {() => (
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

                            <Stack direction={'row'} justifyContent={'space-between'} mt={4}>

                                <Button variant='outlined'
                                    onClick={() => {
                                        if (step > 0) {
                                            setStep(prev =>  prev - 1)
                                        }
                                    }}
                                >
                                    Back
                                </Button>
                                <Button variant='contained'
                                    onClick={() => {
                                        if (step < 6) {
                                            setStep(prev => 1 + prev)
                                        }
                                    }}
                                >
                                    Next
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

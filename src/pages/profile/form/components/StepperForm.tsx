import { Grid2 } from '@mui/material';
import { Form, Formik } from 'formik'
import { useState } from 'react'
import StepperFormSteps from './StepperFormSteps';
import CompanyInfoStep from './CompanyInfoStep';
import AddressStep from './AddressStep';
import ExperienceStep from './ExperienceStep';

const StepperForm = () => {
    const [step, setStep] = useState(1);
    return (
        <Formik initialValues={{}} onSubmit={() => { }}>
            {() => (
                <Form>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xl: 3, lg: 3, md: 3, }} minHeight={'85vh'}>
                            <StepperFormSteps />
                        </Grid2>

                        <Grid2 size={{ xl: 9, lg: 9, md: 9, sm: 12, xs: 12 }} padding={2}>
                            {/* <CompanyInfoStep /> */}
                            {/* <AddressStep/> */}
                            <ExperienceStep />
                        </Grid2>
                    </Grid2>
                </Form>
            )}
        </Formik>
    )
}

export default StepperForm

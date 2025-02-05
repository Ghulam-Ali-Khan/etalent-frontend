import FormikField from '@/components/form/FormikField'
import FormikWrapper from '@/components/form/FormikWrapper'
import { Button, Stack, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { initialValues, validationSchema } from '../utilis/formUtilis';
import useShowResponse from '@/customHooks/useShowResponse';
import { SubmitFormParamsTypes } from '@/types/form';
import { useRegisterMutation } from '@/services/public/auth';

const RegisterForm = () => {
    const [tabValue, setTabValue] = useState(0);

    const [registerUser] = useRegisterMutation();

    // Custom Hooks 
    const { showResponse } = useShowResponse();


    // Handlers
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };


    const handleSubmitForm = async (values: SubmitFormParamsTypes) => {
        const response = await registerUser(values);

        showResponse(response?.data, 'Registered successfull');

        console.log('response ==> ', response);
    }


    return (
        <>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Candidate" />
                <Tab label="Employer" />
            </Tabs>

            <FormikWrapper formInitials={initialValues(tabValue)} formSchema={validationSchema(tabValue)} submitFunc={handleSubmitForm}>
                <Stack spacing={2} className='my-4'>
                    {tabValue === 1 && (<FormikField
                        name='companyName'
                        label='Company Name'
                        placeholder='Company Name'
                        isRequired
                    />
                    )}

                    <FormikField
                        name='email'
                        label='Email'
                        placeholder='Email'
                        type='email'
                        isRequired
                    />

                    <FormikField
                        name='password'
                        label='Password'
                        placeholder='Password'
                        isPasswordField
                        isRequired
                    />

                    <FormikField
                        name='confirmPassword'
                        label='Confirm Password'
                        placeholder='Confirm Password'
                        isPasswordField
                        isRequired
                    />

                    <Button variant='contained' size='large' type='submit' fullWidth>
                        Register
                    </Button>
                </Stack>
            </FormikWrapper>
        </>
    )
}

export default RegisterForm

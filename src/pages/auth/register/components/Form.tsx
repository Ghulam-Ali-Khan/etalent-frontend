import FormikField from '@/components/form/FormikField'
import FormikWrapper from '@/components/form/FormikWrapper'
import { Button, Stack, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const RegisterForm = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Candidate" />
                <Tab label="Employer" />
            </Tabs>

            <FormikWrapper formInitials={{}} submitFunc={() => { }}>
                <Stack spacing={2} className='my-4'>
                    {tabValue === 1 && (<FormikField
                        name='company_name'
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
                        name='confirm_password'
                        label='Confirm Password'
                        placeholder='Confirm Password'
                        isPasswordField
                        isRequired
                    />

                    <Button variant='contained' size='large' fullWidth>
                        Register
                    </Button>
                </Stack>
            </FormikWrapper>
        </>
    )
}

export default RegisterForm

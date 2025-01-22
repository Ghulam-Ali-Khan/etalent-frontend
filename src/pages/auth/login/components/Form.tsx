import FormikField from '@/components/form/FormikField'
import FormikWrapper from '@/components/form/FormikWrapper'
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <FormikWrapper formInitials={{}} submitFunc={() => { }}>
            <Stack spacing={2} className='my-4'>
                <FormikField
                    name='username'
                    label='Email or Talent Id'
                    placeholder='Email or Talent Id'
                    isRequired
                />

                <FormikField
                    name='password'
                    label='Password'
                    placeholder='Password'
                    isPasswordField
                    isRequired
                />


                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                    <Link to={'/auth/forget-password'}>
                        Forget Password?
                    </Link>
                </Stack>

                <Button variant='contained' size='large' fullWidth>
                    Sign in
                </Button>
            </Stack>
        </FormikWrapper>
    )
}

export default LoginForm

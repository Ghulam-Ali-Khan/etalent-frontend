import FormikField from '@/components/form/FormikField'
import FormikWrapper from '@/components/form/FormikWrapper'
import { useLoginMutation } from '@/services/public/auth';
import { Button, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LoginSubmitParams } from '../types/Form';
import { initialValues, loginValidationSchema } from '../utilis/formUtilis';
import useShowResponse from '@/customHooks/useShowResponse';
import FormikCheckbox from '@/components/form/FormikCheckbox';

const LoginForm = () => {
    const navigate = useNavigate();

    const [loginUser] = useLoginMutation();


    // Custom Hooks 
    const { showResponse } = useShowResponse()

    // Handlers
    const handleSubmitForm = async (values: LoginSubmitParams) => {
        const response = await loginUser(values);

        showResponse(response?.data, 'Login successfull', 'Login Failed');

        if (response?.data?.success) {
            navigate('/portal/dashboard');
        }

        console.log('response ==> ', response);
    }

    return (
        <FormikWrapper formInitials={initialValues} formSchema={loginValidationSchema} submitFunc={handleSubmitForm}>
            <Stack spacing={2} className='my-4'>
                <FormikField
                    name='email'
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
                    <FormikCheckbox name='rememberMe' label='Remember me' />

                    <Link to={'/auth/forget-password'}>
                        Forget Password?
                    </Link>
                </Stack>

                <Button variant='contained' size='large' type='submit' fullWidth>
                    Sign in
                </Button>
            </Stack>
        </FormikWrapper>
    )
}

export default LoginForm

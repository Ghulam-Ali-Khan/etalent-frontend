import FormikField from '@/components/form/FormikField'
import FormikWrapper from '@/components/form/FormikWrapper'
import { useLoginMutation } from '@/services/public/auth';
import { Button, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LoginSubmitParams } from '../types/Form';
import { initialValues, loginValidationSchema } from '../utilis/formUtilis';
import useShowResponse from '@/customHooks/useShowResponse';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import { getSkillsToken } from '@/services/public/axios/skillsToken';

const LoginForm = () => {
    const navigate = useNavigate();

    const [loginUser] = useLoginMutation();

    // Custom Hooks 
    const { showResponse } = useShowResponse()

    // Handlers
    const handleSubmitForm = async (values: LoginSubmitParams) => {
        const response = await loginUser(values);

        const { baseModel, user, success } = response?.data || {};

        console.log(' baseModel, user, success ==>',  baseModel, user, success)

        showResponse(response?.data, 'Login successfull', 'Login Failed');

        localStorage.setItem('token', baseModel?.data);
        localStorage.setItem('userId', user);
        localStorage.setItem('userData', JSON.stringify(response?.data));

        if (success) {
            navigate('/portal/dashboard');

            const skillsToken = await getSkillsToken();

            localStorage.setItem('skills_token', skillsToken);
        }

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

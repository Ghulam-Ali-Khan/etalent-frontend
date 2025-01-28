import { Button, Container, Divider, Grid2, Stack, Typography } from '@mui/material'
import LoginImg from '@/assets/imgs/auth/sign-img.png';

import '@/styles/components/form.scss'
import LoginForm from './components/Form';
import MicrosoftImg from '@/assets/imgs/auth/microsoft.png'
import GoogleImg from '@/assets/imgs/auth/google.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <Container className='my-[4rem]'>
            <Grid2 container spacing={4}>
                <Grid2 size={{ xl: 8, lg: 8, md: 6, sm: 12, xs: 12 }} sx={{ '@media(max-width: 600px)': { display: 'none' } }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={LoginImg} style={{ maxWidth: '500px' }} />
                </Grid2>
                <Grid2 size={{ xl: 4, lg: 4, md: 6, sm: 12, xs: 12 }}>
                    <Stack spacing={3}>
                        <Typography variant='h6' fontWeight={600}>
                            eTalentBox
                        </Typography>

                        <Stack spacing={1}>
                            <Typography variant='h4' fontWeight={600} fontSize={'2rem'}>
                                Sign in
                            </Typography>
                            <Typography variant='body2' color='secondary'>
                                Welcome Back to Talent Hub !
                            </Typography>
                        </Stack>

                        <LoginForm />

                        <Divider textAlign='center'>
                            Or
                        </Divider>


                        <Button variant='contained'
                            sx={{ bgcolor: '#f7f7f7', color: '#484949', }}
                            size='large'
                            startIcon={<img src={MicrosoftImg} width={25} />}
                        >
                            Sign in with Microsoft
                        </Button>

                        <Button
                            sx={{ bgcolor: '#f7f7f7', color: '#484949' }}
                            size='large'
                            startIcon={<img src={GoogleImg} width={25} />}
                        >
                            Sign in with Google
                        </Button>

                        <Typography variant='body2' color='secondary' textAlign={'center'}>
                            By Clicking Sign in , you agree to Agreement Terms <Link to={'privacy-policy'}>
                                Privacy Policy
                            </Link>,  and <Link to={'cookie-policy'}>
                                Cookie Policy.
                            </Link>
                        </Typography>

                        <Typography textAlign={'center'}>
                            Don't have an account? <Link to={'/auth/register'}>Create Now</Link>
                        </Typography>
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default LoginPage

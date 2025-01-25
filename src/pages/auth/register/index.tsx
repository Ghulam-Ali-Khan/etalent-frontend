import { Button, Container, Divider, Grid2, Stack, Typography } from '@mui/material'
import RegisterImg from '@/assets/imgs/auth/register.png';

import '@/styles/components/form.scss'
import LoginForm from './components/Form';
import MicrosoftImg from '@/assets/imgs/auth/microsoft.png'
import GoogleImg from '@/assets/imgs/auth/google.png'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <Container className='my-[4rem]'>
            <Grid2 container spacing={4}>
                <Grid2 size={8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <img src={RegisterImg} style={{ maxWidth: '500px' }} />
                </Grid2>
                <Grid2 size={4}>
                    <Stack spacing={3}>
                        <Typography variant='h6' fontWeight={600}>
                            eTalentBox
                        </Typography>

                        <Stack spacing={1}>
                            <Typography variant='h4' fontWeight={600} fontSize={'2rem'}>
                                Register
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

                      

                        <Typography textAlign={'center'}>
                            Already have an account? <Link to={'/auth/login'}>Login Now</Link>
                        </Typography>
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default RegisterPage

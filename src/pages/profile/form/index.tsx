import { Paper, Toolbar, Typography } from '@mui/material'
import React from 'react';
import LogoImg from '@/assets/imgs/logo.png';
import StepperForm from './components/StepperForm';
import StyledContainer from '@/components/common/StyledContainer';

const ProfileForm = () => {
    return (
        <>

            <Toolbar sx={{ bgcolor: 'primary.main' }}>
                <Typography color='white' variant='h4' fontWeight={600}>
                    eTalentBox
                </Typography>
            </Toolbar>

            <StyledContainer className='mt-8'>
                <Paper sx={{ overflow: 'hidden', minHeight: '85vh' }}>
                    <StepperForm />
                </Paper>
            </StyledContainer>
        </>
    )
}

export default ProfileForm

import { Paper, Toolbar, Typography } from '@mui/material'
import React from 'react';
import LogoImg from '@/assets/imgs/logo.png';
import StepperForm from './components/StepperForm';
import StyledContainer from '@/components/common/StyledContainer';
import Header from '@/components/layout/Header';

const ProfileForm = () => {
    return (
        <>
            <Header />

            <StyledContainer className='mt-8'>
                <Paper sx={{ overflow: 'hidden', minHeight: '85vh' }}>
                    <StepperForm />
                </Paper>
            </StyledContainer>
        </>
    )
}

export default ProfileForm

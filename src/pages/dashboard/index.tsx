import Header from '@/components/layout/Header'
import { Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import ProfileDetailes from './components/ProfileDetailes'

const DashboardPage = () => {
    return (
        <>
            <Header />

            <Grid2 container spacing={2} padding={2}>
                <Grid2 size={{ xl: 2, lg: 2, md: 3, sm: 12, xs: 12 }}>
                    <Paper className='p-4'>
                        <ProfileDetailes />
                    </Paper>
                </Grid2>

                <Grid2 size={{ xl: 8, lg: 8, md: 6, sm: 12, xs: 12 }}>
                    <Paper className='p-4'>
                        <Typography variant='h4'>
                            Welcome to dashboard
                        </Typography>
                    </Paper>
                </Grid2>
            </Grid2>

        </>
    )
}

export default DashboardPage

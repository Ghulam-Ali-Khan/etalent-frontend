import Header from '@/components/layout/Header'
import { Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import ProfileDetailes from './components/ProfileDetailes'
import SponsoredJobsChart from './components/JobSuponsersChart'
import ApplicationsSummaryChart from './components/ApplicationsSummary'
import StatsOverview from './components/StatsOverview'

const DashboardPage = () => {
    return (
        <>
            <Header />

            <Grid2 container spacing={2} padding={2}>
                <Grid2 size={{ xl: 2, lg: 2, md: 2, sm: 12, xs: 12 }}>
                    <Paper className='p-4'>
                        <ProfileDetailes />
                    </Paper>
                </Grid2>

                <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                    <SponsoredJobsChart />
                </Grid2>
                <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                    <ApplicationsSummaryChart />
                </Grid2>
                <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }}>
                    <StatsOverview />
                </Grid2>
            </Grid2>

        </>
    )
}

export default DashboardPage

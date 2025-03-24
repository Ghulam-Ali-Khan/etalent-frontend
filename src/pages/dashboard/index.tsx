import Header from '@/components/layout/Header'
import { Box, Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import ProfileDetailes from './components/ProfileDetailes'
import SponsoredJobsChart from './components/JobSuponsersChart'
import ApplicationsSummaryChart from './components/ApplicationsSummary'
import StatsOverview from './components/StatsOverview'
import IconCard from './components/IconCard'
import { InsertChartOutlined, WorkOutlineOutlined } from '@mui/icons-material'
import TopSkills from './components/TopSkills'
import ExperienceSection from './components/ExperienceSection'
import ApplicationsTable from './components/ApplicationsTable'

const DashboardPage = () => {
    return (
        <>
            <Header />

            <Grid2 container spacing={2} padding={2}>
                {/* Left Sidebar */}
                <Grid2 size={{ xl: 2, lg: 2, md: 3, sm: 12, xs: 12 }}>
                    <Paper className="p-4">
                        <ProfileDetailes />
                        <Box display="flex" gap={1} className="border-t border-b py-2 my-2">
                            <IconCard
                                icon={<InsertChartOutlined fontSize="14px" />}
                                heading="Professional Level"
                                value="Professional"
                            />
                            <IconCard
                                icon={<WorkOutlineOutlined fontSize="14px" />}
                                heading="Work Experience"
                                value="3+ years"
                            />
                        </Box>
                        <TopSkills />
                        <ExperienceSection />
                    </Paper>
                </Grid2>

                {/* Middle Section */}
                <Grid2 container size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} spacing={2}>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <SponsoredJobsChart />
                    </Grid2>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <ApplicationsSummaryChart />
                    </Grid2>
                    <Grid2 size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                        <ApplicationsTable />
                    </Grid2>
                </Grid2>

                {/* Right Sidebar */}
                <Grid2 size={{ xl: 4, lg: 4, md: 3, sm: 12, xs: 12 }}>
                    <StatsOverview />
                </Grid2>
            </Grid2>

        </>
    )
}

export default DashboardPage

import React from 'react'
import { Box, Grid2, Paper, Stack, Typography } from '@mui/material'
import Chart from "react-apexcharts";

const SkillsSection = () => {
    const options = {
        chart: {
            type: "donut",
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "40%", // Adjust donut hole size
                },
                dataLabels: {
                    show: false,
                },
            },
        },
        labels: ["Verbal", "Communication", "Management"],
        colors: ["#A4E2C6", "#AED4FB", "#0E4D92"], // Matching the colors in your chart
    };

    const series = [60, 40, 30]; // Adjust percentages for each skill

    return (
        <>
            <Paper className='my-3'>
                <Stack className='title-header '>
                    <Typography variant='h6' fontWeight={600}>
                        Skills
                    </Typography>
                </Stack>
                <Box padding={2}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <Paper sx={{bgcolor: '#F9F9F9'}}>
                                <Stack className='title-header '>
                                    <Typography variant='h6' fontWeight={600}>
                                        Technical Skills
                                    </Typography>
                                </Stack>
                                <Chart options={options} series={series} type="donut" height={250} />
                            </Paper>
                        </Grid2>
                        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <Paper sx={{bgcolor: '#F9F9F9'}}>
                                <Stack className='title-header '>
                                    <Typography variant='h6' fontWeight={600}>
                                        Soft Skills
                                    </Typography>
                                </Stack>
                                <Chart options={options} series={series} type="pie" height={250} />
                            </Paper>
                        </Grid2>
                    </Grid2>
                </Box>
            </Paper>
        </>
    )
}

export default SkillsSection

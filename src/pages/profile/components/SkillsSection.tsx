import React from "react";
import { Box, Grid, Grid2, Paper, Rating, Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import { useGetAllTechnicalSkillsQuery } from "@/services/public/technicalSkills";
import { useGetAllSoftSkillsQuery } from "@/services/public/softSkills";
import SoftSkillsPopup from "../form/components/SoftSkillsPopup";
import TechnicalSkillsPopup from "../form/components/TechnicalSkillsPopup";

const colors = ["#A4E2C6", "#AED4FB", "#0E4D92"];

const SkillsSection = () => {
    const { data: technicalSkills } = useGetAllTechnicalSkillsQuery({});
    const { data: softSkills } = useGetAllSoftSkillsQuery({});

    console.log('technicalSkills ==> ', technicalSkills);

    const getChartOptions = (skills) => ({
        chart: { type: "bar" },
        xaxis: {
            categories: skills?.data?.map((item) => item?.name) || [],
        },
        colors,
    });

    const getSeries = skills => ([{
        data: skills?.data?.map((item) => item?.rating) || [],// Adjust based on actual skill proficiency percentages
    }]);

    const skillsData = [
        { title: "Technical Skills", options: getChartOptions(technicalSkills), popup: <TechnicalSkillsPopup />, series: getSeries(technicalSkills) },
        { title: "Soft Skills", options: getChartOptions(softSkills), popup: <SoftSkillsPopup />, series: getSeries(softSkills) },
    ];

    return (
        <Paper className="my-3">
            <Stack className="title-header">
                <Typography variant="h6" fontWeight={600}>
                    Skills
                </Typography>
            </Stack>
            <Box padding={2}>
                <Grid2 container spacing={2}>
                    {skillsData.map(({ title, options, popup, series }, index) => (
                        <Grid2 key={title} size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <Paper sx={{ bgcolor: "#F9F9F9", padding: 2 }}>
                                <Stack className="title-header" direction={'row'} justifyContent={'space-between'}>
                                    <Typography variant="h6" fontWeight={600}>
                                        {title}
                                    </Typography>

                                    {popup}
                                </Stack>
                                <Box display={'flex'} justifyContent={'space-between'}>

                                    <Chart options={options} series={series} type="bar" height={250} width={500} />

                                    <Stack gap={1} direction={'column'}>
                                        {options?.xaxis?.categories?.map((item, index) => (
                                            <Box display={'flex'} gap={2} alignItems={'center'}>
                                                <Box sx={{ width: 10, height: 10, bgcolor: colors[index] }} />
                                                <Typography fontSize={'14px'} color="secondary">
                                                    {item}
                                                </Typography>
                                                <Rating />
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Paper>
    );
};

export default SkillsSection;

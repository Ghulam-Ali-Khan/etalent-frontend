import React, { useState } from "react";
import { Box, Grid, Grid2, IconButton, Paper, Rating, Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import { useGetAllTechnicalSkillsQuery } from "@/services/public/technicalSkills";
import { useGetAllSoftSkillsQuery } from "@/services/public/softSkills";
import SoftSkillsPopup from "../form/components/SoftSkillsPopup";
import TechnicalSkillsPopup from "../form/components/TechnicalSkillsPopup";
import { Delete, Edit } from "@mui/icons-material";
import { chartColors } from "@/utilis/data";


const SkillsSection = () => {

    const [showSoftSkillsActions, setSoftSkillsActions] = useState(false);
    const [showTechnicalSkillsActions, setTechnicalSkillsActions] = useState(false);

    const { data: technicalSkills } = useGetAllTechnicalSkillsQuery({});
    const { data: softSkills } = useGetAllSoftSkillsQuery({});

    console.log('technicalSkills ==> ', technicalSkills);

    const getChartOptions = (skills) => ({
        chart: { type: "bar" },
        xaxis: {
            categories: skills?.data?.map((item) => item?.name) || [],
        },
        chartColors,
    });

    const getSeries = skills => ([{
        data: skills?.data?.map((item) => item?.rating) || [],// Adjust based on actual skill proficiency percentages
    }]);

    const handleToggleSoftSkillsActions = () => setSoftSkillsActions(prev => !prev);
    const handleToggleTechnicalSkillsActions = () => setTechnicalSkillsActions(prev => !prev);

    const skillsData = [
        {
            title: "Technical Skills", options: getChartOptions(technicalSkills),
            popup: <TechnicalSkillsPopup />, series: getSeries(technicalSkills),
            toggle: handleToggleTechnicalSkillsActions, showActions: showTechnicalSkillsActions,
            editPopup: (data) => <TechnicalSkillsPopup singleData={data} />,
            skillsDataArray: technicalSkills?.data || [],
        },
        {
            title: "Soft Skills", options: getChartOptions(softSkills),
            popup: <SoftSkillsPopup />, series: getSeries(softSkills),
            toggle: handleToggleSoftSkillsActions, showActions: showSoftSkillsActions,
            editPopup: (data) => <SoftSkillsPopup singleData={data} />,
            skillsDataArray: softSkills?.data || [],
        },
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
                    {skillsData.map(({ title, options, popup, series, showActions, toggle, editPopup, skillsDataArray }, index) => (
                        <Grid2 key={title} size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                            <Paper sx={{ bgcolor: "#F9F9F9", padding: 2 }}>
                                <Stack className="title-header" direction={'row'} justifyContent={'space-between'}>
                                    <Typography variant="h6" fontWeight={600}>
                                        {title}
                                    </Typography>

                                    <Stack direction={'row'} gap={1}>
                                        <IconButton onClick={toggle}>
                                            <Edit />
                                        </IconButton>

                                        {popup}
                                    </Stack>
                                </Stack>
                                <Box display={'flex'} justifyContent={'space-between'}>

                                    <Chart options={options} series={series} type="bar" height={250} width={400} />

                                    <Stack gap={0} direction={'column'}>
                                        {skillsDataArray.map((item, index) => (
                                            <Box display={'flex'} gap={2} alignItems={'center'}>
                                                <Box sx={{ width: 10, height: 10, bgcolor: chartColors[index] }} />
                                                <Typography fontSize={'14px'} color="secondary" minWidth={'70px'}>
                                                    {item?.name}
                                                </Typography>
                                                <Rating size="small" />

                                                {
                                                    showActions && (
                                                        <Stack direction={'row'} gap={1}>
                                                            {editPopup(item)}

                                                            <IconButton>
                                                                <Delete fontSize="small" />
                                                            </IconButton>
                                                        </Stack>
                                                    )
                                                }
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

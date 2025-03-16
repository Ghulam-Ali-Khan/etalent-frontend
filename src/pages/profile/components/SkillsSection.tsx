import { useState } from "react";
import { Box, Grid, IconButton, Paper, Rating, Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import { useDeleteTechnicalSkillMutation, useGetAllTechnicalSkillsQuery } from "@/services/public/technicalSkills";
import { useDeleteSoftSkillMutation, useGetAllSoftSkillsQuery } from "@/services/public/softSkills";
import SoftSkillsPopup from "../form/components/SoftSkillsPopup";
import TechnicalSkillsPopup from "../form/components/TechnicalSkillsPopup";
import { Edit } from "@mui/icons-material";
import { chartColors } from "@/utilis/data";
import DeletePopup from "@/components/common/DeletePopup";
import SoftSkillsImg from '@/assets/imgs/soft_skills.png';
import TechnicalSkillsImg from '@/assets/imgs/technical_skills.png';

const SkillsSection = ({ viewProfileId }: { viewProfileId?: any }) => {
    // States
    const [showSoftSkillsActions, setSoftSkillsActions] = useState(false);
    const [showTechnicalSkillsActions, setTechnicalSkillsActions] = useState(false);

    // Queries & Mutations
    const { data: technicalSkills } = useGetAllTechnicalSkillsQuery(viewProfileId);
    const { data: softSkills } = useGetAllSoftSkillsQuery(viewProfileId);
    const [deleteSoftSkill] = useDeleteSoftSkillMutation();
    const [deleteTechnicalSkill] = useDeleteTechnicalSkillMutation();

    // Handlers
    const handleToggleSoftSkillsActions = () => setSoftSkillsActions(prev => !prev);
    const handleToggleTechnicalSkillsActions = () => setTechnicalSkillsActions(prev => !prev);

    // Helper function to check if all ratings are 0
    const shouldShowImage = (skillsArray: any[]) => skillsArray.every(skill => skill.rating === 0);

    // Chart options
    const getChartOptions = (skills: any) => ({
        chart: { type: "bar" },
        xaxis: { categories: skills?.data?.map(item => item?.name) || [] },
        colors: skills?.data?.map((_, index) => chartColors[index]) || [],
        plotOptions: { bar: { distributed: true } },
        legend: { show: false },
    });

    const getSeries = (skills: any) => ([{
        data: skills?.data?.map(item => item?.rating) || [],
    }]);

    // Skills Data
    const skillsData = [
        {
            title: "Technical Skills",
            options: getChartOptions(technicalSkills),
            popup: <TechnicalSkillsPopup />,
            series: getSeries(technicalSkills),
            toggle: handleToggleTechnicalSkillsActions,
            showActions: showTechnicalSkillsActions,
            editPopup: (data) => <TechnicalSkillsPopup singleData={data} />,
            skillsDataArray: technicalSkills?.data || [],
            deletePopup: (id) => <DeletePopup deleteFunc={deleteTechnicalSkill} id={id} deleteItemName="Technical skill" />,
            imgSrc: TechnicalSkillsImg,
        },
        {
            title: "Soft Skills",
            options: getChartOptions(softSkills),
            popup: <SoftSkillsPopup />,
            series: getSeries(softSkills),
            toggle: handleToggleSoftSkillsActions,
            showActions: showSoftSkillsActions,
            editPopup: (data) => <SoftSkillsPopup singleData={data} />,
            skillsDataArray: softSkills?.data || [],
            deletePopup: (id) => <DeletePopup deleteFunc={deleteSoftSkill} id={id} deleteItemName="Soft skill" />,
            imgSrc: SoftSkillsImg,
        },
    ];

    return (
        <Paper className="my-3" id="skills">
            <Stack className="title-header">
                <Typography variant="h6" fontWeight={600}>Skills</Typography>
            </Stack>
            <Box padding={2}>
                <Grid container spacing={2}>
                    {skillsData.map(({ title, options, popup, series, showActions, toggle, editPopup, skillsDataArray, deletePopup, imgSrc }) => (
                        <Grid key={title} item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Paper sx={{ bgcolor: "#F9F9F9", padding: 2 }}>
                                <Stack className="title-header" direction="row" justifyContent="space-between">
                                    <Typography variant="h6" fontWeight={600}>{title}</Typography>

                                    {!viewProfileId && (
                                        <Stack direction="row" gap={1}>
                                            <IconButton onClick={toggle}><Edit /></IconButton>
                                            {popup}
                                        </Stack>
                                    )}
                                </Stack>

                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    {/* Show Image if all ratings are 0, otherwise show Chart */}
                                    {shouldShowImage(skillsDataArray) ? (
                                        <Box component="img" src={imgSrc} width={350} height={250} ml={4} />
                                    ) : (
                                        <Chart options={options} series={series} type="bar" height={250} width={400} />
                                    )}

                                    {/* Skills List with Ratings */}
                                    <Stack gap={1} direction="column">
                                        {skillsDataArray.map((item, index) => (
                                            <Box key={index} display="flex" gap={2} alignItems="center">
                                                <Box sx={{ width: 10, height: 10, bgcolor: chartColors[index] }} />
                                                <Typography fontSize="14px" color="secondary" minWidth="70px">
                                                    {item?.name}
                                                </Typography>
                                                <Rating size="small" value={item?.rating} disabled={!viewProfileId} />

                                                {!viewProfileId && showActions && (
                                                    <Stack direction="row" gap={1}>
                                                        {editPopup(item)}
                                                        {deletePopup(item?.id)}
                                                    </Stack>
                                                )}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Paper>
    );
};

export default SkillsSection;

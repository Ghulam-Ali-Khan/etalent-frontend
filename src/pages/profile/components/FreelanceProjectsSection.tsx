import { useGetAllPortfolioQuery } from '@/services/public/portfolio';
import { Delete, Edit } from '@mui/icons-material';
import { Box, Grid2, IconButton, Paper, Rating, Stack, Typography } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react'
import ProjectModal from './ProjectModal';

const FreelanceProjectsSection = () => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    const { data: freelanceProjectsData } = useGetAllPortfolioQuery({});

    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);

    return (

        (freelanceProjectsData?.data?.length > 0) && (
            <Paper className='mb-3'>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Freelance Projects
                    </Typography>

                    <Stack direction={'row'} gap={2}>
                        <IconButton onClick={handleToggleActionBtns}>
                            <Edit />
                        </IconButton>

                        <ProjectModal isFreelance />
                    </Stack>
                </Stack>

                <Box padding={2}>

                    <Grid2 container spacing={2}>
                        {
                            freelanceProjectsData.data.map(item => (
                                <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 4, xs: 4 }}>
                                    <FreelaceCard data={item} showActionBtns={showActionBtns} />
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Box>
            </Paper>
        )
    )
}

export default FreelanceProjectsSection;

const FreelaceCard = ({ data, showActionBtns }: { data: any, showActionBtns?: boolean }) => {
    return (
        <Paper className='p-4'>
            <Stack gap={2} minHeight={'180px'}>
                <Stack direction={'row'} justifyContent={'space-between'}>

                    <Typography variant='h5'>
                        {data?.name}
                    </Typography>

                    {
                        showActionBtns && (
                            <Stack direction={'row'} gap={1}>
                                <ProjectModal singleData={data} isFreelance />
                                <IconButton>
                                    <Delete fontSize='small' />
                                </IconButton>
                            </Stack>
                        )
                    }
                </Stack>

                <Typography variant='body2' >
                    {moment(data.startDate).format('DD MMM YYYY')} - {data.currentlyWorking ? 'Currently Working' : moment(data.endDate).format('DD MMM YYYY')}
                </Typography>

                {
                    data?.projectUrl && (
                        <Typography variant='body2' style={{ color: '#027afa' }}>
                            {data.projectUrl}
                        </Typography>
                    )
                }
                <Rating />

            </Stack>
        </Paper>
    )
}

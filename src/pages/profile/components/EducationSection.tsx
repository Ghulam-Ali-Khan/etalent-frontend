import { useGetAllEducationQuery } from '@/services/public/education';
import { Delete, Edit } from '@mui/icons-material';
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment';
import React, { useState } from 'react'
import EducationFormModal from '../form/components/EducationFormModal';
import { useGetAllExperienceEducationQuery } from '@/services/public/educationExperienceProjects';
import ProjectSection from './ProjectsSectionForList';

const EducationSection = () => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    const { data: educationData } = useGetAllExperienceEducationQuery({});

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);
    return (
        educationData?.data?.education?.length > 0 && (
            <Paper className='my-3'>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Education
                    </Typography>

                    <Stack direction={'row'} gap={2}>
                        <IconButton
                            onClick={handleToggleActionBtns}
                        >
                            <Edit />
                        </IconButton>
                        <EducationFormModal />
                    </Stack>
                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            educationData.data.education.map((item: any) => (
                                <>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant='h6'>
                                            {item?.school}
                                        </Typography>

                                        {showActionBtns && (
                                            <Stack direction={'row'} spacing={2}>
                                                <EducationFormModal singleData={item} />
                                                <IconButton>
                                                    <Delete />
                                                </IconButton>
                                            </Stack>)}
                                    </Stack>
                                    <Typography variant='body2' color='secondary'>
                                        {item?.degree}, {item?.fieldOfStudy}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {moment(item?.startDate).format('MMM YYYY')} - {moment(item?.endDate).format('MMM YYYY')}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {item?.grade}
                                    </Typography>
                                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                                        {item?.city}, {item?.country}
                                    </Typography>

                                    <ProjectSection projectsArray={item?.projects} showActionBtns={showActionBtns} />
                                </>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper>)
    )
}

export default EducationSection

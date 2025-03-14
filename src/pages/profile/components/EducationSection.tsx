import { useDeleteEducationMutation, useGetAllEducationQuery } from '@/services/public/education';
import { Analytics, Delete, Edit, MyLocation, School } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment';
import React, { useState } from 'react'
import EducationFormModal from '../form/components/EducationFormModal';
import { useGetAllExperienceEducationQuery } from '@/services/public/educationExperienceProjects';
import ProjectSection from './ProjectsSectionForList';
import DeletePopup from '@/components/common/DeletePopup';
import { CalendarIcon } from '@mui/x-date-pickers/icons';

const EducationSection = ({ viewProfileId }: { viewProfileId?: any }) => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    // Mutations & queries
    const { data: educationData } = useGetAllExperienceEducationQuery(viewProfileId);
    const [deleteEducation] = useDeleteEducationMutation();

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);
    return (
        educationData?.data?.education?.length > 0 && (
            <Paper className='my-3' id="education">
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Education
                    </Typography>

                    {!viewProfileId && (
                        <Stack direction={'row'} gap={2}>
                            <IconButton
                                onClick={handleToggleActionBtns}
                            >
                                <Edit />
                            </IconButton>
                            <EducationFormModal />
                        </Stack>
                    )}

                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            educationData.data.education.map((item: any) => (
                                <Box borderRadius={1} padding={2} className="light-grey-border">
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant='h6'>
                                            {item?.school}
                                        </Typography>

                                        {!viewProfileId && showActionBtns && (
                                            <Stack direction={'row'} spacing={2}>
                                                <EducationFormModal singleData={item} />

                                                <DeletePopup deleteFunc={deleteEducation} id={item?.id} deleteItemName='Education' />
                                            </Stack>)}
                                    </Stack>
                                    <Typography variant='body2' color='secondary'>
                                        <School fontSize='small' />     {item?.degree}, {item?.fieldOfStudy}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        <CalendarIcon fontSize='small' />  {moment(item?.startDate).format('MMM YYYY')} - {moment(item?.endDate).format('MMM YYYY')}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        <Analytics fontSize='small' />   {item?.grade}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        <MyLocation fontSize='small' />    {item?.city}, {item?.country}
                                    </Typography>

                                    <ProjectSection projectsArray={item?.projects} showActionBtns={showActionBtns} />

                                    {/* <Divider className='my-2' /> */}
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper>)
    )
}

export default EducationSection

import { useGetAllExperienceQuery } from '@/services/public/experience';
import { Delete, Edit } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Rating, Stack, Typography } from '@mui/material'
import ExperienceFormModal from '../form/components/ExperienceFormModal';
import { useState } from 'react';
import { useGetAllExperienceEducationQuery } from '@/services/public/educationExperienceProjects';
import moment from 'moment';
import ProjectModal from './ProjectModal';
import ProjectSection from './ProjectsSectionForList';

const ExperienceSection = () => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    const { data: experienceData } = useGetAllExperienceEducationQuery({});
    // const { data: experienceData } = useGetAllExperienceQuery({});

    console.log('experienceData1 ==> ', experienceData)

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);

    return (

        (experienceData?.data?.experiences?.length > 0) && (
            <Paper>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Experience
                    </Typography>


                    <Stack direction={'row'} gap={2}>
                        <IconButton
                            onClick={handleToggleActionBtns}
                        >
                            <Edit />
                        </IconButton>

                        <ExperienceFormModal />
                    </Stack>
                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            experienceData.data.experiences.map((item: any) => (
                                <>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant='h6'>
                                            {item?.title}
                                        </Typography>


                                        {showActionBtns && (
                                            <Stack direction={'row'} spacing={2}>
                                                <ExperienceFormModal singleData={item} />

                                                <IconButton>
                                                    <Delete />
                                                </IconButton>
                                            </Stack>
                                        )
                                        }


                                    </Stack>
                                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                                        {item?.company} · {item?.employmentType}
                                    </Typography>
                                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                                        {item?.city},{item?.country}
                                    </Typography>

                                    <Box dangerouslySetInnerHTML={{ __html: item?.description }} />

                                    <ProjectSection projectsArray={item?.projects} showActionBtns={showActionBtns} />

                                    <Divider className='my-4' />
                                </>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper>
        )
    )
}

export default ExperienceSection;

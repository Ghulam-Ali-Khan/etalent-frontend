import { useDeleteExperienceMutation } from '@/services/public/experience';
import { Edit } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import ExperienceFormModal from '../form/components/ExperienceFormModal';
import { useState } from 'react';
import { useGetAllExperienceEducationQuery } from '@/services/public/educationExperienceProjects';
import ProjectSection from './ProjectsSectionForList';
import DeletePopup from '@/components/common/DeletePopup';

const ExperienceSection = ({ viewProfileId }: { viewProfileId?: any }) => {
    // States
    const [showActionBtns, setShowActionBtns] = useState(false);

    // Mutations & Queries
    const { data: experienceData } = useGetAllExperienceEducationQuery(viewProfileId);
    const [deleteExperience] = useDeleteExperienceMutation();

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);

    return (

        (experienceData?.data?.experiences?.length > 0) && (
            <Paper>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Experience
                    </Typography>


                    {
                        !viewProfileId && (
                            <Stack direction={'row'} gap={2}>
                                <IconButton
                                    onClick={handleToggleActionBtns}
                                >
                                    <Edit />
                                </IconButton>

                                <ExperienceFormModal />
                            </Stack>
                        )
                    }
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


                                        {!viewProfileId && showActionBtns && (
                                            <Stack direction={'row'} spacing={2}>
                                                <ExperienceFormModal singleData={item} />

                                                <DeletePopup deleteFunc={deleteExperience} id={item?.id} deleteItemName='Experience' />
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

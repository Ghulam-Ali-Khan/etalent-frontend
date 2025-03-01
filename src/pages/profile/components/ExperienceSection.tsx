import { useGetAllExperienceQuery } from '@/services/public/experience';
import { Delete, Edit } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import ExperienceFormModal from '../form/components/ExperienceFormModal';

const ExperienceSection = () => {
    const { data: experienceData } = useGetAllExperienceQuery({});

    return (

        (experienceData?.data?.length > 0) && (
            <Paper>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Experience
                    </Typography>

                    <ExperienceFormModal />
                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            experienceData.data.map((item: any) => (
                                <>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant='h6'>
                                            {item?.title}
                                        </Typography>

                                        <Stack direction={'row'} spacing={2}>
                                            <IconButton>
                                                <Edit />
                                            </IconButton>
                                            <IconButton>
                                                <Delete />
                                            </IconButton>
                                        </Stack>

                                    </Stack>
                                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                                        {item?.company} · {item?.employmentType}
                                    </Typography>
                                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                                        {item?.city},{item?.country}
                                    </Typography>

                                    <Box dangerouslySetInnerHTML={{ __html: item?.description }} />

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

export default ExperienceSection

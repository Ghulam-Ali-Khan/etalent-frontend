import { Box, Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'
import { useGetAllExperienceQuery } from '@/services/public/experience'

const ExperienceStep = () => {
    const userId = localStorage.getItem('userId');

    const { data: experienceData } = useGetAllExperienceQuery(userId);

    console.log('experienceData ==> ', experienceData);

    return (
        <>
            <Toolbar className='flex justify-between'>
                <Typography variant='h4'>
                    Experience
                </Typography>

                <ExperienceFormModal />
            </Toolbar>

            <Divider />

            <Stack className='px-6 pt-2'>

                {
                    experienceData?.data?.length > 0 ? (
                        experienceData.data.map(item => (
                            <>
                                <Stack spacing={1}>
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

                                    <Typography variant='body2'>
                                        {item?.company} · {item?.employmentType}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {item?.city},{item?.country}
                                    </Typography>

                                    {item?.description}

                                    <Divider className='my-4' />
                                </Stack>
                            </>
                        ))
                    ) : (
                        <Box minHeight={'400px'} className='flex justify-center align-center'>
                            <Typography variant='h6'>
                                No Data Found
                            </Typography>
                        </Box>
                    )
                }
            </Stack>
        </>
    )
}

export default ExperienceStep

import { useGetAllEducationQuery } from '@/services/public/education';
import { Delete, Edit } from '@mui/icons-material';
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment';
import React from 'react'

const EducationSection = () => {
    const { data: educationData } = useGetAllEducationQuery({});

    return (
        educationData?.data?.length > 0 && (
            <Paper className='my-3'>
                <Stack className='title-header '>
                    <Typography variant='h6' fontWeight={600}>
                        Education
                    </Typography>
                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            educationData.data.map((item: any) => (
                                <>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant='h6'>
                                            {item?.school}
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
                                </>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper>)
    )
}

export default EducationSection

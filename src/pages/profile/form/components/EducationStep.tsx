import React from 'react'
import moment from 'moment'
import { Delete, Edit } from '@mui/icons-material'
import { Box, Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ExperienceFormModal from './ExperienceFormModal'
import EducationFormModal from './EducationFormModal'
import { useGetAllEducationQuery } from '@/services/public/education'
import { saveLocalStorage } from '@/utilis/helpers'

const EducationStep = () => {
    const userId = localStorage.getItem('userId');

    const { data: educationData } = useGetAllEducationQuery(userId);

    saveLocalStorage({ label: 'education', data: educationData });

    return (
        <>
            <Toolbar className='flex justify-between'>
                <Typography variant='h4'>
                    Education
                </Typography>

                <EducationFormModal />
            </Toolbar>

            <Divider />

            <Stack className='px-6 pt-2'>

                {
                    educationData?.data?.length > 0 ? (
                        educationData.data.map(item => (
                            <>
                                <Stack spacing={1}>
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

                                    <Typography variant='body2'>
                                        {item?.schoolUrl}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {item?.degree}, {item?.fieldOfStudy}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {moment(item?.startDate).format('MMM YYYY')} - {moment(item?.endDate).format('MMM YYYY')}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {item?.grade}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {item?.city}, {item?.country}
                                    </Typography>

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

export default EducationStep

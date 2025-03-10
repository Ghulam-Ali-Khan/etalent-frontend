import { Box, Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'
import { useDeleteExperienceMutation, useGetAllExperienceQuery } from '@/services/public/experience'
import { getDataLocalStorage, saveLocalStorage } from '@/utilis/helpers'
import DeletePopup from '@/components/common/DeletePopup'

const ExperienceStep = () => {
    const { data: experienceData } = useGetAllExperienceQuery({});

    const [deleteExperience] = useDeleteExperienceMutation();

    saveLocalStorage({ label: 'experience', data: experienceData });

    const experienceStorageData = getDataLocalStorage({ label: 'experience' });

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
                    experienceStorageData?.data?.length > 0 ? (
                        experienceStorageData.data.map((item: any) => (
                            <>
                                <Stack spacing={1}>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant='h6'>
                                            {item?.title}
                                        </Typography>

                                        <Stack direction={'row'} spacing={2}>
                                            <ExperienceFormModal singleData={item} />

                                            <DeletePopup deleteFunc={deleteExperience} id={item?.id} deleteItemName='Experience' />
                                        </Stack>
                                    </Stack>

                                    <Typography variant='body2'>
                                        {item?.company} · {item?.employmentType}
                                    </Typography>
                                    <Typography variant='body2' color='secondary'>
                                        {item?.city},{item?.country}
                                    </Typography>

                                    <Box dangerouslySetInnerHTML={{ __html: item?.description }} />

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

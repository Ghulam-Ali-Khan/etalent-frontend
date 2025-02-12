import { Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'
import EducationFormModal from './EducationFormModal'

const EducationStep = () => {
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


                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant='h6'>
                            National University of Sciences & Technology (NUST)
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
                        https://nust.edu.pk/
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        BSCS,Computer Science
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        Jan 2019-Jan 2021
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        3.89
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        Islamabad,Pakistan
                    </Typography>

                    <Divider className='my-4'/>
                </Stack>

            </Stack>



        </>
    )
}

export default EducationStep

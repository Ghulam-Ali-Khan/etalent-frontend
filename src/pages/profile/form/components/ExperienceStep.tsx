import { Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'

const ExperienceStep = () => {
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


                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant='h6'>
                            UI/UX Designer
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
                        Behance Collaboration · Full-time
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        Remote
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        Islamabad,Pakistan
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        Participated in design challenges and collaborative projects on Behance, contributing to innovative UI/UX solutions.
                        Collaborated with international designers to create and refine user interfaces for web and mobile applications.
                        Conducted online critique sessions to provide and receive feedback, improving design quality and consistency.
                        Presented design concepts and iterations through virtual meetings, effectively communicating design ideas and incorporating stakeholder feedback.
                    </Typography>


                    <Divider className='my-4' />
                </Stack>

            </Stack>



        </>
    )
}

export default ExperienceStep

import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const ExperienceSection = () => {
    return (
        <Paper>
            <Stack className='title-header '>
                <Typography variant='h6' fontWeight={600}>
                    Experience
                </Typography>
            </Stack>
            <Box padding={2}>
                <Stack spacing={1}>
                    <Typography variant='h6'>
                        React Js developer
                    </Typography>
                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                        Beyond Eris Solutions . Fulltime
                    </Typography>
                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                        Remote
                    </Typography>
                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                        Islamabad
                    </Typography>
                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                        Participated in design challenges and collaborative projects on Behance, contributing to innovative UI/UX solutions.
                        Collaborated with international designers to create and refine user interfaces for web and mobile applications.
                        Conducted online critique sessions to provide and receive feedback, improving design quality and consistency.
                        Presented design concepts and iterations through virtual meetings, effectively communicating design ideas and incorporating stakeholder feedback.
                    </Typography>

                </Stack>
            </Box>
        </Paper>
    )
}

export default ExperienceSection

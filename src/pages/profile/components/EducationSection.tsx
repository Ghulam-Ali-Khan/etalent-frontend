import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const EducationSection = () => {
    return (
        <Paper className='my-3'>
            <Stack className='title-header '>
                <Typography variant='h6' fontWeight={600}>
                    Education
                </Typography>
            </Stack>
            <Box padding={2}>
                <Stack spacing={1}>
                    <Typography variant='h6'>
                        Superior University
                    </Typography>
                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                        BSCS
                    </Typography>
                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                        Lahore, Punjab, Pakistan
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

export default EducationSection

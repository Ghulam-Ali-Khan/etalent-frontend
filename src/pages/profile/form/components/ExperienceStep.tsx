import { Toolbar, Typography } from '@mui/material'
import React from 'react'
import ExperienceFormModal from './ExperienceFormModal'

const ExperienceStep = () => {
    return (
        <>
            <Toolbar className='flex justify-between'>
                <Typography variant='h4'>
                    Experience
                </Typography>

                <ExperienceFormModal />
            </Toolbar>


        </>
    )
}

export default ExperienceStep

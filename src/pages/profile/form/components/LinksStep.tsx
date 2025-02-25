import FormikField from '@/components/form/FormikField'
import { Button, Divider, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const LinksStep = () => {
    return (
        <>
            <Toolbar className='flex justify-between'>
                <Typography variant='h4'>
                    Social Links
                </Typography>

            </Toolbar>

            <Divider />

            <Stack spacing={2} mt={2}>
                <FormikField
                    name='linkedin'
                    label='Linkedin'
                    isRequired
                />

                <FormikField
                    name='facebook'
                    label='Facebook'
                />

                <FormikField
                    name='twitter'
                    label='Twitter'
                />

                <FormikField
                    name='instagram'
                    label='Instagram'
                />

            </Stack>
        </>
    )
}

export default LinksStep

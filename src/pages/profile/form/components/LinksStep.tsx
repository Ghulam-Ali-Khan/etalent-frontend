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
                    name='facebook'
                    label='Facebook'
                    isRequired
                />

                <FormikField
                    name='linkdin'
                    label='Linkedin'
                    isRequired
                />

                <FormikField
                    name='twitter'
                    label='Twitter'
                    isRequired
                />

                <FormikField
                    name='instagram'
                    label='Instagram'
                    isRequired
                />

            </Stack>
        </>
    )
}

export default LinksStep

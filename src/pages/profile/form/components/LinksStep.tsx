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

            <Stack spacing={2}>
                <FormikField
                    name='Facebook'
                    label='Facebook'
                    isRequired
                />

                <FormikField
                    name='linkdin'
                    label='Linkedin'
                    isRequired
                />

                <FormikField
                    name='Tweeter'
                    label='Tweeter'
                    isRequired
                />

                <FormikField
                    name='instagram'
                    label='Instagram'
                    isRequired
                />

                <Stack spacing={2} direction={'row'} justifyContent={'end'}>
                    <Button variant='outlined'>
                        Cancel
                    </Button>
                    <Button variant='contained'>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default LinksStep

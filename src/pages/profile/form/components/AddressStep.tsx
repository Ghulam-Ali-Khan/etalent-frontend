import FormikField from '@/components/form/FormikField'
import FormikAutoCompleteSelect from '@/components/form/FormikSelect'
import { Grid2, Stack, Typography } from '@mui/material'
import React from 'react'

const AddressStep = () => {
    return (
        <>
            <Typography variant='h4'>
                Address Step
            </Typography>

            <Stack spacing={2}>

                <FormikField
                    name='street'
                    label='Street'
                    isRequired
                />

                <FormikField
                    name='flat'
                    label='Flat/Suit No.'
                    isRequired
                />

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <FormikAutoCompleteSelect
                            name='city'
                            label='City'
                            options={[]}
                            isRequired
                        />
                    </Grid2>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <FormikAutoCompleteSelect
                            name='state'
                            label='State'
                            options={[]}
                            isRequired
                        />
                    </Grid2>
                </Grid2>


                <FormikField
                    name='zipcode'
                    label='Zip code'
                    isRequired
                />
            </Stack>
        </>
    )
}

export default AddressStep
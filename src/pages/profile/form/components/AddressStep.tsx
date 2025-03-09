import FormikField from '@/components/form/FormikField'
import FormikAutoCompleteSelect from '@/components/form/FormikSelect'
import { Grid2, Stack, Typography } from '@mui/material'
import React from 'react'

const AddressStep = ({ noStep }: { noStep?: boolean }) => {
    return (
        <>
            <Typography variant='h4'>
                Address {!noStep && 'Step'}
            </Typography>

            <Stack spacing={2}>

                <FormikField
                    name='address1'
                    label='Street'
                    isRequired
                />

                <FormikField
                    name='address2'
                    label='Flat/Suit No.'
                    isRequired
                />

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <FormikField
                            name='city'
                            label='City'
                            isRequired
                        />
                    </Grid2>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <FormikField
                            name='state'
                            label='State'
                            isRequired
                        />
                    </Grid2>
                </Grid2>


                <FormikField
                    name='postalCode'
                    label='Zip code'
                    isRequired
                />
            </Stack>
        </>
    )
}

export default AddressStep
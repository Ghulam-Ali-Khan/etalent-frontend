import { Box, Container, Divider, Grid2, Stack, Typography } from '@mui/material'

// hooks
import useGetPrimaryColor from '@/customHooks/useGetPrimaryColor';

// Styles
import { driveUsCardStylings } from '../styles/style';

// types
import { DriveUsCardProps } from '../types/DrivesUs.types';

// Utilis
import { driveUsData } from '../utilis/data';

const DriveUsCard = ({ title, description, icon }: DriveUsCardProps) => {
    const primaryColor = useGetPrimaryColor();

    return (
        <Box sx={driveUsCardStylings(primaryColor)} >
            <Stack justifyContent={'space-between'} minHeight={'200px'}>
                {icon}

                <Stack spacing={1}>
                    <Typography variant='h5' fontWeight={'bold'} color='primary'>
                        {title}
                    </Typography>
                    <Divider sx={{ borderWidth: 2 }} />
                    <Typography variant='body1' color='secondary'>
                        {description}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

const DrivesUs = () => {
    const primaryColor = useGetPrimaryColor();
    return (
        <>
            <Container className='my-[6rem]'>
                <Typography variant='h3' color='primary' textAlign={'center'} fontWeight={600}>
                    Drives Us
                </Typography>

                <Grid2 container spacing={5} className="mt-[5rem]">
                    {
                        driveUsData(primaryColor).map((item: DriveUsCardProps, index: number) => (
                            <Grid2 size={3}>
                                <DriveUsCard {...item} key={index} />
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Container>
        </>
    )
}

export default DrivesUs;



import useGetPrimaryColor from '@/customHooks/useGetPrimaryColor'
import { Box, Button, Container, Grid2, Stack, Typography } from '@mui/material'
import ReadyJumpImg from '@/assets/imgs/landingpage/ready-to-jump-img.png';

const ReadyToJump = () => {
    const primaryColor = useGetPrimaryColor();
    return (
        <Container maxWidth='xl' sx={{ marginBottom: 3 }}>
            <Grid2 container>
                <Grid2 size={{ xl: 8, lg: 8, md: 6, sm: 12, xs: 12 }}>
                    <Box bgcolor={primaryColor} paddingX={4} paddingY={8} minHeight={'100%'}>
                        <Stack alignItems={'start'} justifyContent={'space-between'} spacing={3}>
                            <Typography variant='h4' color='white' fontWeight={600} maxWidth={'500px'}>
                                Ready to jump-start your
                                career? Don't wait any longer
                            </Typography>

                            <Typography variant='body2' color='white'>
                                Click the button below to explore thousands of job listings.
                            </Typography>

                            <Button variant='contained' sx={{ bgcolor: 'white', color: primaryColor, textTransform: 'capitalize', py: 2, fontWeight: 600 }}>
                                Find Your Dream Job Now
                            </Button>
                        </Stack>
                    </Box>
                </Grid2>
                <Grid2 size={{ xl: 4, lg: 4, md: 6, sm: 12, xs: 12 }}>
                    <img src={ReadyJumpImg} />
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default ReadyToJump

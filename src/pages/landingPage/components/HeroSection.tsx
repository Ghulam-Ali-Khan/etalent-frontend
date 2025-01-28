import useGetPrimaryColor from '@/customHooks/useGetPrimaryColor';
import { Box, Container, Stack, Typography } from '@mui/material'
import { heroSeactionStackStyling } from '../styles/style';
import StyledButton from '@/components/common/StyledButton';
import { Email } from '@mui/icons-material';
import { kpisData } from '../utilis/data';

const HeroSection = () => {
    const primaryColor = useGetPrimaryColor();

    return (
        <>
            <Container className='flex justify-center'>
                <Stack
                    spacing={2}
                    {...heroSeactionStackStyling}
                >
                    <Typography variant='h1' fontWeight={'bold'} color={'primary'} textAlign={'center'}>
                        Talent Hub - Unlock your Potential with one Profile
                    </Typography>
                    <Typography variant='body1' color='secondary' maxWidth={'500px'} textAlign={'center'}>
                        Discover your dream jobs , focus on soft skills, boost your income and upskill with our innovative powered platform.
                    </Typography>

                    <StyledButton text='Get Started' variant='contained' />

                    <Stack className='w-full py-4 px-12' style={{ marginTop: 'auto' }} direction={'row'} justifyContent={'space-between'} border={`1px solid ${primaryColor}`}>
                        {
                            kpisData(primaryColor).map((item: object) => (
                                <Stack>
                                    <Box className="flex items-center" gap={2}>
                                        {item.icon}
                                        <Typography fontSize={'4.5rem'} color='primary' lineHeight={1}>
                                            {item.count}
                                        </Typography>
                                    </Box>
                                    <Typography color='secondary' fontSize={'1.2rem'} textAlign={'center'}>
                                        {item.title}
                                    </Typography>
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
            </Container>
            <Box width={'100%'} minHeight={'8rem'} bgcolor={primaryColor} />
        </>
    )
}

export default HeroSection

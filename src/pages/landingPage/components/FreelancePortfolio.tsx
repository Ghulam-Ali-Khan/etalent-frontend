import { Box, Grid2, keyframes, Stack, Typography } from '@mui/material'

// types
import { FreelancePortfolioCards } from '../types/LandingPage.types';

// Utilis
import { freelancePortfolioImgs } from '../utilis/data';
import StyledContainer from './StyledContainer';



const FreelancePortfolio = () => {
    const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

    return (
        <>
            <StyledContainer className='my-[6rem]'>
                <Stack alignItems={'center'} spacing={2}>
                    <Typography variant='h3' color='primary' textAlign={'center'} fontWeight={600}>
                        Freelance Portfolio
                    </Typography>
                    <Typography variant='body1' color='secondary' textAlign={'center'} maxWidth={'500px'}>
                        Easily enable a stunning freelance portfolio, showcasing your skills and expertise, and take control of your freelance projects with one portfolio.
                    </Typography>
                </Stack>

                <Grid2 container spacing={5} className="mt-[5rem]">
                    {
                        freelancePortfolioImgs.map((item: FreelancePortfolioCards, index: number) => (
                            <Grid2 size={3}>
                                <Box
                                    sx={{
                                        animation: `${scaleAnimation} 3s infinite`,
                                    }}
                                >
                                    <img src={item.img} key={index} />
                                </Box>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </StyledContainer>
        </>
    )
};

export default FreelancePortfolio;
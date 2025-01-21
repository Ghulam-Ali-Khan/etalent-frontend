import { Grid2, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

// Utils
import { nextJobSteps } from '../utilis/data';
import StyledButton from '@/components/common/StyledButton';

import NextJobImg from '@/assets/imgs/landingpage/next-job-img.png';
import StyledContainer from './StyledContainer';

const NextJob = () => {
    return (
        <>
            <StyledContainer className="my-[6rem]">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h3" color="primary" textAlign="left" fontWeight={600} maxWidth="500px">
                        The Fast Track to Your Next Job
                    </Typography>

                    <StyledButton text="Learn More" variant="contained" />
                </Stack>

                <Grid2 container spacing={15} className="mt-[5rem]">
                    <Grid2 size={6}>
                        <img src={NextJobImg} className="max-w-full" />
                    </Grid2>
                    <Grid2 size={6}>
                        <Stepper
                            orientation="vertical"
                            connector={null} // Remove default connector
                            sx={{
                                position: "relative",
                                "& .MuiStep-root:before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "40px",
                                    left: "8px", // Align the line with the center of the dot
                                    width: "2px",
                                    height: "calc(100% - 70px)", // Adjust height between dots
                                    backgroundColor: "#1976d2", // Primary color for the line
                                    zIndex: -1,
                                },
                                "& .MuiStep-root:last-child:before": {
                                    display: "none", // Remove the line after the last dot
                                },
                            }}
                        >
                            {nextJobSteps.map((step, index) => (
                                <Step key={index} active>
                                    <StepLabel
                                        icon={
                                            <div
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    borderRadius: "50%",
                                                    border: "2px solid #1976d2", // Primary color
                                                    backgroundColor: "white",
                                                    zIndex: 1, // Ensure dots appear above the line
                                                }}
                                            />
                                        }
                                        sx={{
                                            "& .MuiStepLabel-iconContainer": {
                                                paddingRight: "8px",
                                                paddingTop: "10px",
                                            },
                                            "& .MuiStepLabel-label": {
                                                display: "flex",
                                                flexDirection: "column",
                                                marginBottom: 2,
                                            },
                                            "& .MuiStepLabel-labelContainer": {
                                                marginLeft: "12px",
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                            color="primary"
                                            sx={{ lineHeight: "1.2" }}
                                        >
                                            {step.label}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {step.description}
                                        </Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Grid2>
                </Grid2>
            </StyledContainer>
        </>
    );
};

export default NextJob;

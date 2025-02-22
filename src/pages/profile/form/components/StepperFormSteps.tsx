import React from 'react';
import { Box, Step, StepLabel, Stepper, useTheme } from '@mui/material';
import { steps } from '../../utilis/formUtilis';

const StepIcon = ({ icon, active }: { icon: React.ReactNode; active: boolean }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: active ? theme.palette.primary.main : theme.palette.secondary.main,
                color: 'white',
            }}
        >
            {icon}
        </Box>
    );
};

const StepperFormSteps = ({ step }: { step: any }) => {
    const activeStep = step; // Change this dynamically

    return (
        <Box
            bgcolor="#F1F1F1"
            padding={2}
            maxHeight={'90vh'}
            display="flex"
            flexDirection="column"
            alignItems={'center'}
        >
            <Stepper activeStep={activeStep} orientation="vertical"
                sx={{
                    flexGrow: 1,
                    "& .MuiStepConnector-line": {
                        minHeight: "55px", // Ensures connector lines are properly spaced
                    }
                }}
            >
                {steps.map((item, index) => (
                    <Step key={item.title}>
                        <StepLabel
                            icon={<StepIcon icon={item.icon} active={index === activeStep} />}
                        >
                            {item.title}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default StepperFormSteps;

import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

// Define the props for the DriveUsCard component
export interface DriveUsCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface StyledContainerProps {
    className?: string; // Custom class name
    sx?: SxProps; // Custom styles (MUI's sx prop)
    children?: ReactNode; // Optional children to render
}

export interface FreelancePortfolioCards {
    img: string;
}
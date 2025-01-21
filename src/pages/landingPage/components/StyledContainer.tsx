import { Container } from '@mui/material'
import { StyledContainerProps } from '../types/LandingPage.types'

const StyledContainer = ({ className = '', sx = {}, children }: StyledContainerProps) => {
    return (
        <Container sx={{
            ...sx, width: '100%', // Allow the container to expand fully
            paddingLeft: '1rem',
            paddingRight: '1rem',
            '@media (min-width: 1280px)': {
                maxWidth: '1350px !important', // Slightly increase the width for screens larger than `lg`
            },
            '@media (min-width: 1536px)': {
                maxWidth: '1536px', // Keep default `xl` width for larger screens
            },
        }} className={className}  >
            {children}
        </Container>
    )
}

export default StyledContainer

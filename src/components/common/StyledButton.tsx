import { Button } from '@mui/material'

const StyledButton = ({ text = '', variant = 'contained', size = "large", sx = {} }) => {
    return (
        <Button variant={variant} sx={{
            minHeight: '53px',
            minWidth: '129px',
            fontWeight: 600,
            fontSize: '18px',
            textTransform: 'capitalize',
            ...sx,
        }}>
            {text}
        </Button>
    )
}

export default StyledButton

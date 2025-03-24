import { Box, Stack, Typography } from "@mui/material";

const IconCard = ({ icon, heading, value }) => {
    return (
        <>
            <Stack direction={'row'} gap={2} alignItems={'center'}>
                <Box sx={{
                    bgcolor: '#D6EBFF', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', height: '30px', width: '30px', borderRadius: 1
                }} >
                    {icon}
                </Box>
                <Stack spacing={0}>
                    <Typography fontSize={'12px'} color='secondary'>
                        {heading}
                    </Typography>
                    <Typography variant='h6' fontSize={'16px'} fontWeight={600}>
                        {value}
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default IconCard;
import { Avatar, Box, IconButton, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { EditNote } from '@mui/icons-material';

const ProfileDetailes = () => {
    return (
        <>
            <Stack direction={'row'} justifyContent={'end'}>
                <IconButton>
                    <EditNote />
                </IconButton>
            </Stack>

            <Stack spacing={1} alignItems={'center'} className='w-100'>
                <Avatar alt="Ghulam Ali" src={AvatarImg} sx={{ width: 120, height: 120 }} />


                <Typography variant='h5' fontWeight={600} mb={0}>
                    Ghulam Ali
                </Typography>
                <Stack alignItems={'center'}>
                    <Typography variant='body2' color='secondary' >
                        Senior Software Engineer
                    </Typography>
                    <Typography variant='body2' color='secondary' fontSize={'12px'}>
                        Lahore Punjab Pakistan
                    </Typography>
                </Stack>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
        </>
    )
}

export default ProfileDetailes

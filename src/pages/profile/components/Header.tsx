import useGetPrimaryColor from '@/customHooks/useGetPrimaryColor'
import { Notifications, Search, Settings, Textsms } from '@mui/icons-material'
import { InputAdornment, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <Toolbar sx={{ bgcolor: 'primary.main', justifyContent: 'space-between', py: 3 }}  >
            <Stack direction={'row'} spacing={4}>
                <Typography
                    variant='h6'
                    color='white'
                    fontWeight={900}
                    borderLeft={'10px solid green'}
                    paddingLeft={2}
                >
                    eTalentBox
                </Typography>

                <TextField
                    placeholder='Search job'
                    sx={{ minWidth: '300px', bgcolor: 'white', borderRadius: 1 }}
                    size='small'
                />
            </Stack>


            <Stack direction={'row'} spacing={4}>
                <Link to={'dashboard'}>
                    <Typography variant='body2' color='white'>
                        Home
                    </Typography>
                </Link>

                <Link to={'dashboard'}>
                    <Typography variant='body2' color='white'>
                        Jobs
                    </Typography>
                </Link>

                <Stack direction={'row'} spacing={2} color={'white'}>
                    <Settings />

                    <Textsms/>

                    <Notifications/>
                </Stack>
            </Stack>

        </Toolbar>
    )
}

export default Header

import { Avatar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import useGetPopupUtilis from '@/customHooks/useGetPopupUtilis';
import UnStyledLink from '../common/UnStyledLink';
import { useNavigate } from 'react-router-dom';
import LogoSymbol from '@/assets/imgs/logo_symbol.svg';
import { Notifications, Settings, Sms } from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwatcher';

const Header = () => {
    const navigate = useNavigate();
    const { anchorEl, handleAnchorElClose, handleAnchorElOpen } = useGetPopupUtilis();

    return (
        <Toolbar sx={{ bgcolor: 'primary.main', justifyContent: 'space-between', py: 2 }}>

            <Stack direction={'row'} spacing={8} alignItems={'center'}>
                <Stack direction={'row'}>
                    <img src={LogoSymbol} width={'30px'} />

                    <Typography
                        variant='h6'
                        color='white'
                        fontWeight={900}
                        paddingLeft={2}
                    >
                        eTalentBox
                    </Typography>

                </Stack>

                <Stack direction={'row'} spacing={3}>
                    <UnStyledLink color='white' link='/'>
                        Overview
                    </UnStyledLink>
                    <UnStyledLink color='white' link='/'>
                        Find Job
                    </UnStyledLink>
                    <UnStyledLink color='white' link='/'>
                        Applications
                    </UnStyledLink>
                    <UnStyledLink color='white' link='/'>
                        News
                    </UnStyledLink>
                </Stack>
            </Stack>

            <Stack direction={'row'} spacing={3} alignItems={'center'}>
                <LanguageSwitcher />

                <IconButton>
                    <Settings sx={{ color: 'white' }} />
                </IconButton>

                <IconButton>
                    <Sms sx={{ color: 'white' }} />
                </IconButton>

                <IconButton>
                    <Notifications sx={{ color: 'white' }} />
                </IconButton>

                <IconButton onClick={handleAnchorElOpen}>
                    <Avatar alt="Ghulam Ali" src={AvatarImg} />
                </IconButton>

            </Stack>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAnchorElClose}
            >
                <MenuItem onClick={handleAnchorElClose}><UnStyledLink link='/portal/profile'> Profile</UnStyledLink></MenuItem>
                <MenuItem onClick={() => {
                    navigate('/auth/login')
                    handleAnchorElClose();
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    localStorage.removeItem("userData");
                }}>Logout</MenuItem>
            </Menu>
        </Toolbar>
    )
}

export default Header

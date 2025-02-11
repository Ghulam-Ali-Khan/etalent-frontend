import { Avatar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import useGetPopupUtilis from '@/customHooks/useGetPopupUtilis';
import UnStyledLink from '../common/UnStyledLink';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { anchorEl, handleAnchorElClose, handleAnchorElOpen } = useGetPopupUtilis();

    return (
        <Toolbar sx={{ bgcolor: 'primary.main', justifyContent: 'space-between', py: 3 }}>
            <Typography
                variant='h6'
                color='white'
                fontWeight={900}
                paddingLeft={2}
            >
                eTalentBox
            </Typography>


            <Stack>
                <IconButton onClick={handleAnchorElOpen}>
                    <Avatar alt="Ghulam Ali" src={AvatarImg} />
                </IconButton>
            </Stack>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAnchorElClose}
            >
                <MenuItem onClick={handleAnchorElClose}><UnStyledLink link='/portal/profile/add'> Profile</UnStyledLink></MenuItem>
                <MenuItem onClick={() => {
                    navigate('/auth/login')
                    handleAnchorElClose();
                    localStorage.removeItem("token");
                }}>Logout</MenuItem>
            </Menu>
        </Toolbar>
    )
}

export default Header

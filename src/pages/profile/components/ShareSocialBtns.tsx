import useGetPopupUtilis from '@/customHooks/useGetPopupUtilis';
import { Facebook, Twitter, LinkedIn, WhatsApp, Share } from '@mui/icons-material';
import { Box, Button, IconButton, Popover } from '@mui/material';

const apiUrl = import.meta.env.VITE_APP_URL;

const ShareSocialBtns = ({ viewProfileId }: { viewProfileId: any }) => {
    const { anchorEl, handleAnchorElClose, handleAnchorElOpen } = useGetPopupUtilis();

    const userId = localStorage.getItem('userId');
    const profileUrl = `${apiUrl}portal/user-profile/${viewProfileId || userId}`;

    const socialPlatforms = [
        { name: "Facebook", icon: <Facebook sx={{ color: "#1877F2" }} />, link: `https://www.facebook.com/sharer/sharer.php?u=${profileUrl}` },
        { name: "Twitter", icon: <Twitter sx={{ color: "#1DA1F2" }} />, link: `https://twitter.com/intent/tweet?url=${profileUrl}` },
        { name: "LinkedIn", icon: <LinkedIn sx={{ color: "#0077B5" }} />, link: `https://www.linkedin.com/shareArticle?url=${profileUrl}` },
        { name: "WhatsApp", icon: <WhatsApp sx={{ color: "#25D366" }} />, link: `https://api.whatsapp.com/send?text=${encodeURIComponent(profileUrl)}` },
    ];

    return (
        <>
            <Button startIcon={<Share />} onClick={handleAnchorElOpen}>
                Share
            </Button>

            <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleAnchorElClose}>
                <Box padding={1}>
                    {socialPlatforms.map(({ name, icon, link }) => (
                        <a key={name} href={link} target="_blank" rel="noopener noreferrer">
                            <IconButton>
                                {icon}
                            </IconButton>
                        </a>
                    ))}
                </Box>
            </Popover>
        </>
    );
};

export default ShareSocialBtns;

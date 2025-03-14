import { Avatar, Box, Button, Grid2, IconButton, Paper, Rating, Stack, Tooltip, Typography } from '@mui/material'
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { ContentCopy, FacebookOutlined, InsertChartOutlined, Instagram, LinkedIn, Twitter, WorkOutlineOutlined } from '@mui/icons-material';
import AddSectionMenu from './AddSectionMenu';
import { sectionLinks } from '../utilis/data';
import QRCode from 'react-qr-code';
import { useGetPorfileQuery } from '@/services/public/profile';
import { useGetAllSocialLinksQuery } from '@/services/public/socialLink';
import { useState } from 'react';
import ShareSocialBtns from './ShareSocialBtns';


const apiUrl = import.meta.env.VITE_APP_URL;

const ProfileInfo = ({ viewProfileId }: { viewProfileId?: any }) => {
    const userId = localStorage.getItem('userId');

    const [copied, setCopied] = useState(false);
    const profileUrl = `${apiUrl}portal/user-profile/${viewProfileId || userId}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(profileUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };


    const { data: profileInfoData } = useGetPorfileQuery(viewProfileId);
    const { data: socialLinkData } = useGetAllSocialLinksQuery(viewProfileId);


    const { artifactUrl = AvatarImg, firstName, lastName, city, nationality, profileRating } = profileInfoData?.data || {}
    const { facebook, instagram, linkedin, twitter } = socialLinkData?.data?.[0] || {};

    return (
        <>
            <Paper className='p-4'>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'}>
                    <Box display={'flex'} gap={2}>
                        <Avatar src={artifactUrl} sx={{ height: '100px', width: '100px' }} />

                        <Stack>
                            <Typography variant='h5' fontWeight={600}>
                                {firstName} {lastName}
                            </Typography>

                            <Typography color='secondary' fontSize={'12px'}>
                                {city}, {nationality}
                            </Typography>

                            <Rating name="half-rating" defaultValue={profileRating} />

                        </Stack>
                    </Box>

                    <Stack>
                        <Paper sx={{ bgcolor: '#D1F9E6', padding: '5px 10px' }}>
                            <Typography variant='body2' fontSize={'12px'} fontWeight={600}>
                                eTalent ID : 1234
                            </Typography>
                        </Paper>
                        <Stack direction={'row'} gap={1} mt={2}>
                            {
                                facebook && (
                                    <a href={facebook}>
                                        <FacebookOutlined color='secondary' />
                                    </a>
                                )
                            }
                            {
                                instagram && (
                                    <a href={instagram}>
                                        <Instagram color='secondary' />
                                    </a>
                                )
                            }
                            {
                                linkedin && (
                                    <a href={linkedin}>
                                        <LinkedIn color='secondary' />
                                    </a>
                                )
                            }
                            {
                                twitter && (
                                    <a href={twitter}>
                                        <Twitter color='secondary' />
                                    </a>
                                )
                            }
                        </Stack>

                    </Stack>
                </Stack>

                <Grid2 container>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <Stack direction={'row'} justifyContent={'space-between'}
                            borderTop={'1px solid #E7E7E7'}
                            borderBottom={'1px solid #E7E7E7'} mt={2} py={2}>
                            <IconCard
                                icon={<WorkOutlineOutlined fontSize='14px' />}
                                heading={'Work Experience'}
                                value={'10+ years'}
                            />
                            <IconCard
                                icon={<InsertChartOutlined fontSize='14px' />}
                                heading={'Professional Level'}
                                value={'Professional'}
                            />
                            <IconCard
                                icon={<LinkedIn fontSize='14px' />}
                                heading={'Connect with'}
                                value={'LinkedIn'}
                            />
                        </Stack>

                        {
                            !viewProfileId && (
                                <AddSectionMenu />
                            )
                        }

                        <Stack direction={'row'} gap={4} mt={4}>
                            {sectionLinks.map((link) => (
                                <a key={link.to} href={link.to}>
                                    {link.label}
                                </a>
                            ))}
                        </Stack>

                    </Grid2>
                    <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                        <Stack mt={1} gap={2} alignItems={'end'} justifyContent={'end'}>
                            <QRCode value={profileUrl} size={150} />
                            <Tooltip title={copied ? "Copied!" : "Copy to clipboard"} className='flex gap-2'> 
                                <IconButton
                                    onClick={handleCopy}
                                >
                                    <ContentCopy />
                                </IconButton>

                                <ShareSocialBtns viewProfileId={viewProfileId} />
                            </Tooltip>
                        </Stack>
                    </Grid2>
                </Grid2>
            </Paper>
        </>
    )
}

export default ProfileInfo


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

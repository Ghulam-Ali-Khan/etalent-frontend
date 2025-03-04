import { Avatar, Box, Grid2, Paper, Rating, Stack, Typography } from '@mui/material'
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { FacebookOutlined, InsertChartOutlined, Instagram, LinkedIn, Twitter, WorkOutlineOutlined } from '@mui/icons-material';
import AddSectionMenu from './AddSectionMenu';
import { Link } from 'react-router-dom';
import { sectionLinks } from '../utilis/data';

const ProfileInfo = () => {


    return (
        <>
            <Paper className='p-4'>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'}>
                    <Box display={'flex'} gap={2}>
                        <Avatar src={AvatarImg} sx={{ height: '100px', width: '100px' }} />

                        <Stack>
                            <Typography variant='h5' fontWeight={600}>
                                Ghulam Ali
                            </Typography>
                            <Typography color='secondary' fontSize={'12px'}>
                                React Js Developer
                            </Typography>
                            <Typography color='secondary' fontSize={'12px'}>
                                Islamabad, Pakistan
                            </Typography>

                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

                        </Stack>
                    </Box>

                    <Stack>
                        <Paper sx={{ bgcolor: '#D1F9E6', padding: '5px 10px' }}>
                            <Typography variant='body2' fontSize={'12px'} fontWeight={600}>
                                eTalent ID : 1234
                            </Typography>
                        </Paper>
                        <Stack direction={'row'} gap={1} mt={2}>
                            <FacebookOutlined color='secondary' />
                            <Instagram color='secondary' />
                            <LinkedIn color='secondary' />
                            <Twitter color='secondary' />
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

                        <AddSectionMenu />

                        <Stack direction={'row'} gap={4} mt={4}>
                            {sectionLinks.map((link) => (
                                <Link key={link.to} to={link.to}>
                                    {link.label}
                                </Link>
                            ))}
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

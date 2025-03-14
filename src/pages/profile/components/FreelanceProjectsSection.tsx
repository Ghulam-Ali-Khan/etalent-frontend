import { useDeletePortfolioMutation, useGetAllPortfolioQuery } from '@/services/public/portfolio';
import { CalendarMonth, Edit, OpenInNew } from '@mui/icons-material';
import { Box, Grid2, IconButton, Paper, Rating, Stack, Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react'
import ProjectModal from './ProjectModal';
import DeletePopup from '@/components/common/DeletePopup';
import CommonModal from '@/components/common/CommonModal';
import useGetPopupUtilis from '@/customHooks/useGetPopupUtilis';
import { greyBg } from '@/styles/utilis/utilis';

const FreelanceProjectsSection = ({ viewProfileId }: { viewProfileId?: any }) => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    // Queries
    const { data: freelanceProjectsData } = useGetAllPortfolioQuery(viewProfileId);

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);

    return (

        (freelanceProjectsData?.data?.length > 0) && (
            <Paper className='mb-3'>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Freelance Projects
                    </Typography>

                    {
                        !viewProfileId && (
                            <Stack direction={'row'} gap={2}>
                                <IconButton onClick={handleToggleActionBtns}>
                                    <Edit />
                                </IconButton>

                                <ProjectModal isFreelance />
                            </Stack>
                        )
                    }

                </Stack>

                <Box padding={2}>

                    <Grid2 container spacing={2}>
                        {
                            freelanceProjectsData.data.map(item => (
                                <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 4, xs: 4 }}>
                                    <FreelaceCard data={item} showActionBtns={showActionBtns} viewProfileId={viewProfileId} />
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Box>
            </Paper>
        )
    )
}

export default FreelanceProjectsSection;

const FreelaceCard = ({ data, showActionBtns, viewProfileId }: { data: any, showActionBtns?: boolean, viewProfileId?: any }) => {

    const [deletePortfolio] = useDeletePortfolioMutation();
    const { anchorEl, handleAnchorElClose, handleModalOpen } = useGetPopupUtilis();

    return (
        <>
            <CommonModal isOpen={Boolean(anchorEl)} toggle={handleAnchorElClose} minWidth='50%' title='Freelance Project'>
                <Box padding={3}>
                    <Stack gap={2} minHeight={'180px'}>
                        <Stack direction={'row'} justifyContent={'space-between'}>

                            <Typography variant='h5' fontWeight={600}>
                                {data?.name}
                            </Typography>

                        </Stack>

                        <Typography variant='body2' >
                            {moment(data.startDate).format('DD MMM YYYY')} - {data.currentlyWorking ? 'Currently Working' : moment(data.endDate).format('DD MMM YYYY')}
                        </Typography>

                        {
                            data?.projectUrl && (
                                <Typography variant='body2' style={{ color: '#027afa' }}>
                                    {data.projectUrl}
                                </Typography>
                            )
                        }
                        <Rating />

                        {
                            data?.description && (
                                <>
                                    <Typography variant='body2' fontWeight={600}>
                                        Description
                                    </Typography>

                                    <Box dangerouslySetInnerHTML={{ __html: data?.description }} />
                                </>
                            )
                        }

                    </Stack>
                </Box>
            </CommonModal>

            <Paper id='portfolio' className=" p-4 light-grey-border" sx={greyBg}>
                <Stack gap={2} minHeight={'180px'}>
                    <Stack direction={'row'} justifyContent={'space-between'}>

                        <Typography variant='h5' fontWeight={600} onClick={handleModalOpen} sx={{ cursor: 'pointer' }}>
                            {data?.name}
                        </Typography>

                        {
                            !viewProfileId && showActionBtns && (
                                <Stack direction={'row'} gap={1}>
                                    <ProjectModal singleData={data} isFreelance />

                                    <DeletePopup deleteFunc={deletePortfolio} id={data?.id} deleteItemName='Porject' />
                                </Stack>
                            )
                        }
                    </Stack>

                    <Typography variant='body2' >
                        <CalendarMonth fontSize='small' />  {moment(data.startDate).format('DD MMM YYYY')} - {data.currentlyWorking ? 'Currently Working' : moment(data.endDate).format('DD MMM YYYY')}
                    </Typography>

                    {
                        data?.projectUrl && (
                            <Typography variant='body2' style={{ color: '#027afa' }}>
                                <OpenInNew fontSize='small' />         {data.projectUrl}
                            </Typography>
                        )
                    }
                    <Rating />

                </Stack>
            </Paper>
        </>
    )
}

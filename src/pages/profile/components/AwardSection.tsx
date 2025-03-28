import { Assignment, CalendarMonth, Edit } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment';
import { useState } from 'react'
import DeletePopup from '@/components/common/DeletePopup';
import { useDeleteAwardMutation, useGetAllAwardQuery } from '@/services/public/award';
import AwardModal from './AwardModal';

const AwardSection = ({ viewProfileId }: { viewProfileId?: any }) => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    // Mutations & queries
    const { data: awardData } = useGetAllAwardQuery(viewProfileId);
    const [deleteAward] = useDeleteAwardMutation();

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);

    return (
        awardData?.data?.length > 0 && (
            <Paper className='my-3'>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Awards
                    </Typography>

                    {!viewProfileId && (
                        <Stack direction={'row'} gap={2}>
                            <IconButton
                                onClick={handleToggleActionBtns}
                            >
                                <Edit />
                            </IconButton>
                            <AwardModal />
                        </Stack>
                    )}

                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            awardData.data.map((item: any) => (
                                <Box borderRadius={1} padding={2} className="light-grey-border">
                                    <Stack gap={1}>

                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <Typography variant='h5' fontWeight={600}>
                                                {item?.title}
                                            </Typography>

                                            {!viewProfileId && showActionBtns && (
                                                <Stack direction={'row'} spacing={2}>
                                                    <AwardModal singleData={item} />

                                                    <DeletePopup deleteFunc={deleteAward} id={item?.id} deleteItemName='Award' />
                                                </Stack>)}
                                        </Stack>
                                        <Typography variant='body2' color='secondary'>
                                            <Assignment fontSize='small' /> {item?.issuer}
                                        </Typography>
                                        <Typography variant='body2' color='secondary'>
                                            <CalendarMonth fontSize='small' />  {moment(item?.issuingDate).format('MMM YYYY')}
                                        </Typography>
                                        {
                                            item?.description && (
                                                <>
                                                    <Typography variant='body2' fontWeight={600}>
                                                        Description
                                                    </Typography>

                                                    <Box dangerouslySetInnerHTML={{ __html: item?.description }} />
                                                </>
                                            )
                                        }
                                    </Stack>
                                    {/* <Divider className='my-3' /> */}
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper>)
    )
}

export default AwardSection

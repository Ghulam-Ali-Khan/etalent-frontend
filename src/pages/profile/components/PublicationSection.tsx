import { Assessment, CalendarMonth, Edit } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment';
import { useState } from 'react'
import DeletePopup from '@/components/common/DeletePopup';
import { useDeletePublicationMutation, useGetAllPublicationsQuery } from '@/services/public/publication';
import PublicationModal from './PublicationModal';

const PublicationSection = ({ viewProfileId }: { viewProfileId?: any }) => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    // Mutations & queries
    const { data: publicationData } = useGetAllPublicationsQuery(viewProfileId);
    const [deletePublication] = useDeletePublicationMutation();

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);

    return (
        publicationData?.data?.length > 0 && (
            <Paper className='my-3'>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Publication
                    </Typography>

                    {!viewProfileId && (
                        <Stack direction={'row'} gap={2}>
                            <IconButton
                                onClick={handleToggleActionBtns}
                            >
                                <Edit />
                            </IconButton>
                            <PublicationModal />
                        </Stack>
                    )}

                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            publicationData.data.map((item: any) => (
                                <Box borderRadius={1} padding={2} className="light-grey-border">
                                    <Stack gap={1}>

                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <Typography variant='h5' fontWeight={600}>
                                                {item?.title}
                                            </Typography>

                                            {!viewProfileId && showActionBtns && (
                                                <Stack direction={'row'} spacing={2}>
                                                    <PublicationModal singleData={item} />

                                                    <DeletePopup deleteFunc={deletePublication} id={item?.id} deleteItemName='Publication' />
                                                </Stack>)}
                                        </Stack>
                                        <Typography variant='body2' color='secondary'>
                                            <Assessment fontSize='small' /> {item?.authorName}
                                        </Typography>
                                        <Typography variant='body2' color='secondary'>
                                            <CalendarMonth fontSize='small' /> {moment(item?.publicationDate).format('MMM YYYY')}
                                        </Typography>
                                        {
                                            item?.url && (
                                                <Typography variant='body2' color='secondary'>
                                                    <a href={item?.url} className='blue-link' target='_blank'>
                                                        {item?.url}
                                                    </a>
                                                </Typography>
                                            )
                                        }

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
                                        {/* <Divider className='my-3' /> */}
                                    </Stack>
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper>)
    )
}

export default PublicationSection

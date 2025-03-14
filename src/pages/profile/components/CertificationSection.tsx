import { useDeleteEducationMutation, useGetAllEducationQuery } from '@/services/public/education';
import { Analytics, Assessment, CalendarMonth, Delete, Download, Edit, OpenInNew } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import moment from 'moment';
import React, { useState } from 'react'
import EducationFormModal from '../form/components/EducationFormModal';
import { useGetAllExperienceEducationQuery } from '@/services/public/educationExperienceProjects';
import ProjectSection from './ProjectsSectionForList';
import DeletePopup from '@/components/common/DeletePopup';
import { useDeleteCertificationMutation, useGetAllCertificationQuery } from '@/services/public/certifications';
import CretificationsAndTrainings from './CretificationsAndTrainings';

const CertificationSection = ({ viewProfileId }: { viewProfileId?: any }) => {
    const [showActionBtns, setShowActionBtns] = useState(false);

    // Mutations & queries
    const { data: certificationData } = useGetAllCertificationQuery(viewProfileId);
    const [deleteCertification] = useDeleteCertificationMutation();

    // Handlers
    const handleToggleActionBtns = () => setShowActionBtns(prev => !prev);

    return (
        certificationData?.data?.length > 0 && (
            <Paper className='my-3'>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        Certification & Trainings
                    </Typography>

                    {!viewProfileId && (
                        <Stack direction={'row'} gap={2}>
                            <IconButton
                                onClick={handleToggleActionBtns}
                            >
                                <Edit />
                            </IconButton>
                            <EducationFormModal />
                        </Stack>
                    )}

                </Stack>
                <Box padding={2}>
                    <Stack spacing={1}>
                        {
                            certificationData.data.map((item: any) => (
                                <Box borderRadius={1} padding={2} className="light-grey-border">
                                    <Stack gap={1}>

                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <Typography variant='h5' fontWeight={600}>
                                                {item?.title}
                                            </Typography>

                                            {!viewProfileId && showActionBtns && (
                                                <Stack direction={'row'} spacing={2}>
                                                    <CretificationsAndTrainings singleData={item} />

                                                    <DeletePopup deleteFunc={deleteCertification} id={item?.id} deleteItemName='Certification' />
                                                </Stack>)}
                                        </Stack>
                                        <Typography variant='body2' color='secondary'>
                                            <Assessment fontSize='small' />   {item?.organizationName}
                                        </Typography>
                                        <Typography variant='body2' color='secondary'>
                                            <CalendarMonth fontSize='small' />   {moment(item?.issueDate).format('MMM YYYY')} -  {item?.expireDate ? moment(item?.expireDate).format('MMM YYYY') : 'No Expire'}
                                        </Typography>
                                        {
                                            item?.organizationUrl && (
                                                <Typography variant='body2' color='secondary'>
                                                    <a href={item?.organizationUrl} className='blue-link' target='_blank'>
                                                        <OpenInNew fontSize='small' />    {item?.organizationUrl}
                                                    </a>
                                                </Typography>
                                            )
                                        }

                                        <Typography variant='body2' color='secondary'>
                                            <Analytics fontSize='small' />     Score :  {item?.score}
                                        </Typography>

                                        {
                                            item?.artifactUrl && (
                                                <a href={item?.artifactUrl} className='blue-link' download={'Certificate'}>
                                                    <Button variant='contained' size='small' startIcon={<Download fontSize='small' />}>
                                                        Click here to download
                                                    </Button>
                                                </a>
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

export default CertificationSection

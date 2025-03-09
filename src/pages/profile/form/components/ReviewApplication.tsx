import { Avatar, Box, Grid2, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react';
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { useFormikContext } from 'formik';
import moment from 'moment';
import { getDataLocalStorage } from '@/utilis/helpers';

const ReviewApplication = () => {
    const { values } = useFormikContext();

    const educationStorageData = getDataLocalStorage({ label: 'education' });
    const experienceStorageData = getDataLocalStorage({ label: 'experience' });
    const technicalStorageData = getDataLocalStorage({ label: 'technicalSkills' });
    const softStorageData = getDataLocalStorage({ label: 'softSkills' });

    return (
        <Box>
            <Typography variant='h4' mb={3}>
                Review Your Application
            </Typography>

            <Box bgcolor={'#F9F9F9'}>
                <Stack>

                    <SectionDetailed heading={'Profile information'}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                <Avatar src={values?.artifactUrl} sx={{ width: '200px', height: '200px' }} />
                            </Grid2>
                            <Grid2 size={{ xl: 9, lg: 9, md: 9, sm: 12, xs: 12 }}>
                                <Stack spacing={2}>
                                    <Typography variant='h4'>
                                        {values?.firstName} {values?.lastName}
                                    </Typography>

                                    <Grid2 container spacing={2}>
                                        <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }}>
                                            <Stack spacing={1}>
                                                <LabelValuePair label={'Date of birth'} value={moment(values?.dateOfBirth).format('DD MMM YYYY')} />
                                                <LabelValuePair label={'Work Country'} value={values?.workCountry} />
                                            </Stack>
                                        </Grid2>
                                        <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }}>
                                            <Stack spacing={1}>
                                                <LabelValuePair label={'Language'} value={values?.language} />
                                                <LabelValuePair label={'Passport/License number'} value={values?.passportNumber} />
                                            </Stack>
                                        </Grid2>
                                        <Grid2 size={{ xl: 4, lg: 4, md: 4, sm: 12, xs: 12 }}>
                                            <Stack spacing={1}>
                                                <LabelValuePair label={'Nationality'} value={values?.nationality} />
                                                <LabelValuePair label={'Last Digit Id Number'} value={values?.idNumber} />
                                            </Stack>
                                        </Grid2>
                                    </Grid2>
                                </Stack>
                            </Grid2>
                        </Grid2>
                    </SectionDetailed>
                    <SectionDetailed heading={'Address'}>
                        <>
                            <Stack spacing={1}>
                                <LabelValuePair label={'Street'} value={values?.address1} />
                                <LabelValuePair label={'Flat/Suit No'} value={values?.address2} />
                                <Grid2 container spacing={2}>
                                    <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                        <LabelValuePair label={'City'} value={values?.city} />
                                    </Grid2>
                                    <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                        <LabelValuePair label={'State'} value={values?.state} />
                                    </Grid2>
                                    <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                        <LabelValuePair label={'Zipcode'} value={values?.postalCode} />
                                    </Grid2>

                                </Grid2>
                            </Stack>
                        </>
                    </SectionDetailed>
                    {
                        educationStorageData?.data?.length > 0 && (
                            <SectionDetailed heading={'Education'}>
                                <>
                                    <List className="w-full" sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        {
                                            educationStorageData.data.map((item: any) => (
                                                <ListItem className="w-full" sx={{ display: "list-item" }}>
                                                    <Stack spacing={2} className='w-full'>
                                                        <Typography fontSize={'14px'} fontWeight={'bold'}>
                                                            {item?.degree} - {item?.school} (   {moment(item?.startDate).format('MMM YYYY')} - {moment(item?.endDate).format('MMM YYYY')})
                                                        </Typography>

                                                        <Grid2 container spacing={2}>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <Stack spacing={1}>
                                                                    <LabelValuePair label={'Grade/CGPA'} value={item?.grade} />
                                                                    <LabelValuePair label={'School/University URL'} value={item?.schoolUrl} />
                                                                </Stack>
                                                            </Grid2>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <LabelValuePair label={'City'} value={item?.city} />
                                                            </Grid2>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <LabelValuePair label={'Province/State'} value={item?.state} />
                                                            </Grid2>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <LabelValuePair label={'Country'} value={item?.country} />
                                                            </Grid2>
                                                        </Grid2>
                                                    </Stack>
                                                </ListItem>
                                            ))}
                                    </List>
                                </>
                            </SectionDetailed>
                        )}

                    {
                        experienceStorageData?.data?.length > 0 && (
                            <SectionDetailed heading={'Experience'}>
                                <>
                                    <List className="w-full" sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        {
                                            experienceStorageData.data.map((item: any) => (
                                                <ListItem className="w-full" sx={{ display: "list-item" }}>
                                                    <Stack spacing={2} className='w-full'>
                                                        <Typography fontSize={'14px'} fontWeight={'bold'}>
                                                            {item?.title}
                                                        </Typography>
                                                        <Typography fontSize={'12px'}>
                                                            {item?.company} · {item?.employmentType}
                                                        </Typography>

                                                        <Grid2 container spacing={2}>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <LabelValuePair label={'Industry'} value={item?.industry} />
                                                            </Grid2>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <LabelValuePair label={'City/State'} value={item?.city} />
                                                            </Grid2>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <LabelValuePair label={'Country'} value={item?.country} />
                                                            </Grid2>
                                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                                <LabelValuePair label={'Currently Working'} value={item?.currentlyWorking ? 'Yes' : 'No'} />
                                                            </Grid2>
                                                        </Grid2>
                                                        <LabelValuePair label={'Description'} value={item?.description} />
                                                    </Stack>
                                                </ListItem>
                                            ))
                                        }
                                        {/* <ListItem className="w-full" sx={{ display: "list-item" }}>
                                            <Stack spacing={2} className='w-full'>
                                                <Typography fontSize={'14px'} fontWeight={'bold'}>
                                                    React Js developer
                                                </Typography>
                                                <Typography fontSize={'12px'}>
                                                    Beyond Eris Solutions . Fulltime
                                                </Typography>

                                                <Grid2 container spacing={2}>
                                                    <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                        <LabelValuePair label={'Industry'} value={'IT'} />
                                                    </Grid2>
                                                    <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                        <LabelValuePair label={'City/State'} value={'Lahore'} />
                                                    </Grid2>
                                                    <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                        <LabelValuePair label={'Country'} value={'Pakistan'} />
                                                    </Grid2>
                                                    <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                        <LabelValuePair label={'Currently Working'} value={'Yes'} />
                                                    </Grid2>
                                                </Grid2>
                                                <LabelValuePair label={'Description'} value={'Beyond Eris Solutions . Fulltime    Beyond Eris Solutions . Fulltime   Beyond Eris Solutions . Fulltime   Beyond Eris Solutions . Fulltime   Beyond Eris Solutions . Fulltime'} />
                                            </Stack>
                                        </ListItem> */}
                                    </List>

                                </>
                            </SectionDetailed>
                        )}
                    {
                        (softStorageData?.data?.length > 0) && (
                            <SectionDetailed heading={'Soft Skills'}>
                                <Grid2 container spacing={2}>
                                    {
                                        softStorageData.data.map((item: any) => (
                                            <Grid2 size={{ xl: 2, lg: 2, md: 3, sm: 6, xs: 6 }}>
                                                <Paper sx={{ bgcolor: '#E3E3E3', padding: '5px 10px', borderRadius: 10, maxWidth: 'max-content' }}>
                                                    {item?.name}
                                                </Paper>
                                            </Grid2>
                                        ))}
                                </Grid2>
                            </SectionDetailed>

                        )}

                    {
                        (technicalStorageData?.data?.length > 0) && (
                            <SectionDetailed heading={'Technical Skills'}>
                                <Grid2 container spacing={2}>
                                    {
                                        technicalStorageData.data.map((item: any) => (
                                            <Grid2 size={{ xl: 2, lg: 2, md: 3, sm: 6, xs: 6 }}>
                                                <Paper sx={{ bgcolor: '#E3E3E3', padding: '5px 10px', borderRadius: 10, maxWidth: 'max-content' }}>
                                                    {item?.name}
                                                </Paper>
                                            </Grid2>
                                        ))
                                    }
                                </Grid2>
                            </SectionDetailed>
                        )
                    }



                    <SectionDetailed heading={'Social Profile URLs'}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 6 }}>
                                <LabelValuePair label={'Facebook'} value={values?.facebook} />
                            </Grid2>
                            <Grid2 size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 6 }}>
                                <LabelValuePair label={'Linkedin'} value={values?.linkedin} />
                            </Grid2>
                            <Grid2 size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 6 }}>
                                <LabelValuePair label={'Twitter'} value={values?.twitter} />
                            </Grid2>
                            <Grid2 size={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 6 }}>
                                <LabelValuePair label={'Instagram'} value={values?.instagram} />
                            </Grid2>
                        </Grid2>
                    </SectionDetailed>

                </Stack>
            </Box>
        </Box>
    )
}

export default ReviewApplication;

const SectionDetailed = ({ heading, children }) => {
    return (
        <>
            <Stack>
                <Box bgcolor={'#E3E3E3'} padding={2}>
                    <Typography variant='body2' fontWeight={'bold'}>
                        {heading}
                    </Typography>
                </Box>
                <Box padding={2}>
                    {children}
                </Box>
            </Stack>
        </>
    );
}

const LabelValuePair = ({ label, value }) => {
    return (
        value && (<>
            <Stack spacing={1}>
                <Typography fontSize={'12px'} fontWeight={600} >{label}</Typography>
                <Typography fontSize={'12px'} color='secondary' >{value}</Typography>
            </Stack>
        </>)
    )
}

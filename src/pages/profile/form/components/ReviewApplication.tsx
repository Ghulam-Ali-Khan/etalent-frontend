import { Avatar, Box, Grid2, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react';
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { useFormikContext } from 'formik';
import moment from 'moment';

const ReviewApplication = () => {
    const { values } = useFormikContext();
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
                                <Avatar src={AvatarImg} sx={{ width: '200px', height: '200px' }} />
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
                    <SectionDetailed heading={'Education'}>
                        <>
                            <List className="w-full" sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                <ListItem className="w-full" sx={{ display: "list-item" }}>
                                    <Stack spacing={2} className='w-full'>
                                        <Typography fontSize={'14px'} fontWeight={'bold'}>
                                            BSCS - Superior University (2525 - 2345)
                                        </Typography>

                                        <Grid2 container spacing={2}>
                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                <Stack spacing={1}>
                                                    <LabelValuePair label={'Grade/CGPA'} value={'3.6'} />
                                                    <LabelValuePair label={'School/University URL'} value={'superior.com'} />
                                                </Stack>
                                            </Grid2>
                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                <LabelValuePair label={'City'} value={'Lahore'} />
                                            </Grid2>
                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                <LabelValuePair label={'Province/State'} value={'Punjab'} />
                                            </Grid2>
                                            <Grid2 size={{ xl: 3, lg: 3, md: 3, sm: 12, xs: 12 }}>
                                                <LabelValuePair label={'Country'} value={'Pakistan'} />
                                            </Grid2>
                                        </Grid2>
                                    </Stack>
                                </ListItem>
                            </List>
                        </>
                    </SectionDetailed>
                    <SectionDetailed heading={'Experience'}>
                        <>
                            <List className="w-full" sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                <ListItem className="w-full" sx={{ display: "list-item" }}>
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
                                </ListItem>
                            </List>

                        </>
                    </SectionDetailed>

                    <SectionDetailed heading={'Soft Skills'}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xl: 2, lg: 2, md: 3, sm: 6, xs: 6 }}>
                                <Paper sx={{ bgcolor: '#E3E3E3', padding: '5px 10px', borderRadius: 10, maxWidth: 'max-content' }}>
                                    Ghulam Ali
                                </Paper>
                            </Grid2>
                        </Grid2>
                    </SectionDetailed>

                    <SectionDetailed heading={'Technical Skills'}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xl: 2, lg: 2, md: 3, sm: 6, xs: 6 }}>
                                <Paper sx={{ bgcolor: '#E3E3E3', padding: '5px 10px', borderRadius: 10, maxWidth: 'max-content' }}>
                                    Ghulam Ali
                                </Paper>
                            </Grid2>
                        </Grid2>
                    </SectionDetailed>

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

import { Box, Paper, Stack, Typography } from '@mui/material'
import OverviewModal from './OverviewModal';
import { useGetOverviewQuery } from '@/services/public/overview';

const AboutSection = () => {

  const { data: overviewData } = useGetOverviewQuery({});

    return (
        overviewData?.data && (
            <Paper className='my-3'>
                <Stack className='title-header ' direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6' fontWeight={600}>
                        About
                    </Typography>

                    <Stack direction={'row'} gap={2}>
                        <OverviewModal />
                    </Stack>
                </Stack>
                <Box padding={2}>
                <Box dangerouslySetInnerHTML={{ __html: overviewData?.data?.overviewDetail }} />
                </Box>
            </Paper>)
    )
}

export default AboutSection

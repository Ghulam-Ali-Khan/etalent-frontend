import { Box, Divider, IconButton, Rating, Stack, Typography } from "@mui/material";
import ProjectModal from "./ProjectModal";
import moment from "moment";
import { Delete } from "@mui/icons-material";

const ProjectSection = ({ projectsArray, showActionBtns }: { projectsArray: any, showActionBtns?: boolean }) => {
    return (
        (projectsArray?.length > 0) && (
            <>
                <Typography variant='h6' fontWeight={600}>
                    Projects
                </Typography>

                <Stack pl={3}>

                    {
                        projectsArray.map(data => (

                            <Stack>
                                <Divider className='my-2' />
                                <Stack direction={'row'} justifyContent={'space-between'} className='border-top border-bottom mt-2'>
                                    <Typography variant='body1' fontWeight={600}>
                                        {data?.name}
                                    </Typography>

                                    {
                                        showActionBtns && (
                                            <Stack direction={'row'} gap={1}>
                                                <ProjectModal singleData={data} />
                                                <IconButton>
                                                    <Delete fontSize='small' />
                                                </IconButton>
                                            </Stack>
                                        )
                                    }
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
                                <Rating className='mb-3' />
                                {
                                    data?.description && (
                                        <>
                                            <Typography variant='body1' fontWeight={600}>
                                                Description
                                            </Typography>

                                            <Box dangerouslySetInnerHTML={{ __html: data?.description }} />
                                        </>
                                    )
                                }
                                <Divider className='my-2' />
                            </Stack>
                        ))
                    }

                </Stack >

            </>
        )
    );
}

export default ProjectSection;
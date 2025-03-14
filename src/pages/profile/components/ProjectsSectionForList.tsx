import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Paper,
    Rating,
    Stack,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectModal from "./ProjectModal";
import moment from "moment";
import { useDeleteProjectMutation } from "@/services/public/project";
import DeletePopup from "@/components/common/DeletePopup";
import { greyBg } from "@/styles/utilis/utilis";
import { SnippetFolder } from "@mui/icons-material";

const ProjectSection = ({ projectsArray, showActionBtns }: { projectsArray: any, showActionBtns?: boolean }) => {
    const [deleteProject] = useDeleteProjectMutation();

    if (!projectsArray?.length) return null; // Hide section if no projects

    return (
        <Accordion className="mt-3 light-grey-border">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h6' fontWeight={600} display="flex" alignItems="center" gap={1}>
                    <SnippetFolder /> Projects
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                {/* <Divider className="my-2" /> */}

                <Stack pl={5} spacing={2} className="custom-list">
                    {projectsArray.map((data, index) => (
                        <Paper key={index} className="p-3 list-item" sx={greyBg}>
                            <Stack gap={1}>
                                <Stack direction="row" justifyContent="space-between" className="border-top border-bottom mt-2">
                                    <Typography variant='body1' fontWeight={600}>
                                        {data?.name}
                                    </Typography>

                                    {showActionBtns && (
                                        <Stack direction="row" gap={1}>
                                            <ProjectModal singleData={data} />
                                            <DeletePopup deleteFunc={deleteProject} id={data?.id} deleteItemName="Project" />
                                        </Stack>
                                    )}
                                </Stack>

                                <Typography variant='body2'>
                                    {moment(data.startDate).format('DD MMM YYYY')} - {data.currentlyWorking ? 'Currently Working' : moment(data.endDate).format('DD MMM YYYY')}
                                </Typography>

                                {data?.projectUrl && (
                                    <Typography variant='body2' sx={{ color: '#027afa' }}>
                                        {data.projectUrl}
                                    </Typography>
                                )}

                                <Rating className='mb-3' />

                                {data?.description && (
                                    <>
                                        <Typography variant='body1' fontWeight={600}>
                                            Description
                                        </Typography>
                                        <Box dangerouslySetInnerHTML={{ __html: data?.description }} />
                                    </>
                                )}
                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};

export default ProjectSection;

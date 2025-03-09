import { useState } from 'react';
import useGetPopupUtilis from '@/customHooks/useGetPopupUtilis';
import { ArrowDropDown, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Button, Collapse, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { addSectionMenuItems } from '../utilis/data';
import EducationFormModal from '../form/components/EducationFormModal';
import ExperienceFormModal from '../form/components/ExperienceFormModal';
import SoftSkillsPopup from '../form/components/SoftSkillsPopup';
import TechnicalSkillsPopup from '../form/components/TechnicalSkillsPopup';
import ProjectModal from './ProjectModal';
import PublicationModal from './PublicationModal';
import BasicInfoModal from './BasicInfoModal';
import OverviewModal from './OverviewModal';

const AddSectionMenu = () => {
    const { anchorEl, handleAnchorElClose, handleAnchorElOpen } = useGetPopupUtilis();

    // State to handle the visibility of each submenu
    const [openSubMenus, setOpenSubMenus] = useState({});

    // Toggle submenu visibility
    const handleSubMenuToggle = (submenu) => {
        setOpenSubMenus((prevState) => ({
            ...prevState,
            [submenu]: !prevState[submenu],  // Toggle visibility for the specific submenu
        }));
    };

    return (
        <>
            <Button sx={{ borderBottom: 1, borderRadius: 0, display: 'flex', justifyContent: 'space-between', width: '100%', mt: 3 }}
                onClick={handleAnchorElOpen} endIcon={<ArrowDropDown />} color='secondary'>
                Add Section
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAnchorElClose}
            >
                {
                    addSectionMenuItems({
                        educationModal: <EducationFormModal isModalTxt />,
                        experienceModal: <ExperienceFormModal isModalTxt />,
                        softSkillModal: <SoftSkillsPopup isModalTxt />,
                        technicalSkillModal: <TechnicalSkillsPopup isModalTxt />,
                        projectModal: <ProjectModal isModalTxt />,
                        publicationModal: <PublicationModal/>,
                        basicInfoModal: <BasicInfoModal isModalTxt/>,
                        overviewModal: <OverviewModal isModalTxt />
                    }).map(item => (
                        item?.data ? (
                            <div key={item.title}>
                                <MenuItem onClick={() => handleSubMenuToggle(item.title)}>
                                    <ListItemText primary={item.title} />
                                    {openSubMenus[item.title] ? <ExpandLess /> : <ExpandMore />}
                                </MenuItem>
                                <Collapse in={openSubMenus[item.title]}>
                                    <List component="div" disablePadding>
                                        {
                                            item.data.map(subMenu => (
                                                <ListItem key={subMenu.title} sx={{ cursor: 'pointer' }}>
                                                    {
                                                        subMenu?.component ? (
                                                            subMenu.component
                                                        ) : (
                                                            <ListItemText primary={subMenu.title} />
                                                        )
                                                    }
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Collapse>
                            </div>
                        ) : (
                            <MenuItem onClick={handleAnchorElClose} sx={{ cursor: 'pointer' }} key={item.title}>
                                {item.title}
                            </MenuItem>
                        )
                    ))
                }
            </Menu>
        </>
    );
};

export default AddSectionMenu;

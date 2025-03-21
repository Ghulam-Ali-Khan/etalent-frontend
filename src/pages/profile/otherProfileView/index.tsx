import { Box } from '@mui/material';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../components/ProfileInfo';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import FreelanceProjectsSection from '../components/FreelanceProjectsSection';
import CertificationSection from '../components/CertificationSection';
import PublicationSection from '../components/PublicationSection';
import AwardSection from '../components/AwardSection';

const OtherPersonProfile = () => {

    const { id } = useParams();

    return (
        <>
            <Header />
            <Box className="w-full px-[150px]" >
                <ProfileInfo viewProfileId={id} />
                <AboutSection viewProfileId={id} />
                <SkillsSection viewProfileId={id} />
                <ExperienceSection viewProfileId={id} />
                <EducationSection viewProfileId={id} />
                <FreelanceProjectsSection viewProfileId={id} />
                <CertificationSection viewProfileId={id} />
                <PublicationSection viewProfileId={id} />
                <AwardSection viewProfileId={id} />
            </Box>

        </>
    )
}

export default OtherPersonProfile

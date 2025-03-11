import { Box, Container } from '@mui/material'
import ProfileInfo from './components/ProfileInfo'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import Header from '@/components/layout/Header'
import FreelanceProjectsSection from './components/FreelanceProjectsSection'
import AboutSection from './components/AboutSection'
import CertificationSection from './components/CertificationSection'
import PublicationSection from './components/PublicationSection'
import AwardSection from './components/AwardSection'

const ProfilePage = () => {
    return (
        <>
            <Header />
            <Box className="w-full px-[150px]" >
                <ProfileInfo />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <EducationSection />
                <FreelanceProjectsSection />
                <CertificationSection />
                <PublicationSection />
                <AwardSection/>
            </Box>
        </>
    )
}

export default ProfilePage

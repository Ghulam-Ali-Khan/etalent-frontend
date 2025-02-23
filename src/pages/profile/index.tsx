import { Box, Container } from '@mui/material'
import ProfileInfo from './components/ProfileInfo'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import Header from '@/components/layout/Header'

const ProfilePage = () => {
    return (
        <>
            <Header />
            <Box className="w-full px-[150px]" >
                <ProfileInfo />
                <SkillsSection />
                <ExperienceSection />
                <EducationSection />
            </Box>
        </>
    )
}

export default ProfilePage

import { Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'
import TechnicalSkillsPopup from './TechnicalSkillsPopup'
import SoftSkillsPopup from './SoftSkillsPopup'
import { useGetAllTechnicalSkillsQuery } from '@/services/public/technicalSkills'
import { useGetAllSoftSkillsQuery } from '@/services/public/softSkills'

const SkillsStep = () => {
    const { data: technicalSkills } = useGetAllTechnicalSkillsQuery({});
    const { data: softSkills } = useGetAllSoftSkillsQuery({});

    console.log('technicalSkills , softSkills ==> ', softSkills, technicalSkills);

    return (
        <>
            <Toolbar className='flex justify-between mb-2'>
                <Typography variant='h4'>
                    Technical  Skills
                </Typography>

                <TechnicalSkillsPopup />
            </Toolbar>

            <Divider />
            {
                (technicalSkills?.data?.length > 0) && (
                    <Stack className='px-6 pt-2'>
                        <Stack spacing={1}>
                            {
                                technicalSkills.data.map(item => (
                                    <>
                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <Typography variant='h6'>
                                                {item?.name}
                                            </Typography>

                                            <Stack direction={'row'} spacing={2}>
                                                <IconButton>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton>
                                                    <Delete />
                                                </IconButton>
                                            </Stack>
                                        </Stack>

                                        <Divider className='my-4' />
                                    </>
                                ))
                            }

                        </Stack>
                    </Stack>
                )
            }

            <Toolbar className='flex justify-between my-2'>
                <Typography variant='h4'>
                    Soft  Skills
                </Typography>

                <SoftSkillsPopup />
            </Toolbar>

            <Divider />

            {
                (softSkills?.data?.length > 0) && (
                    <Stack className='px-6 pt-2'>
                        <Stack spacing={1}>
                            {
                                softSkills.data.map(item => (
                                    <>
                                        <Stack direction={'row'} justifyContent={'space-between'}>
                                            <Typography variant='h6'>
                                                {item?.name}
                                            </Typography>

                                            <Stack direction={'row'} spacing={2}>
                                                <IconButton>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton>
                                                    <Delete />
                                                </IconButton>
                                            </Stack>
                                        </Stack>

                                        <Divider className='my-4' />
                                    </>
                                ))
                            }
                        </Stack>
                    </Stack>
                )
            }
        </>
    )
}

export default SkillsStep

import { Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'
import TechnicalSkillsPopup from './TechnicalSkillsPopup'
import SoftSkillsPopup from './SoftSkillsPopup'
import { useGetAllTechnicalSkillsQuery } from '@/services/public/technicalSkills'
import { useGetAllSoftSkillsQuery } from '@/services/public/softSkills'
import { getDataLocalStorage, saveLocalStorage } from '@/utilis/helpers'

const SkillsStep = () => {
    const { data: technicalSkills } = useGetAllTechnicalSkillsQuery({});
    const { data: softSkills } = useGetAllSoftSkillsQuery({});

    saveLocalStorage({ label: 'technicalSkills', data: technicalSkills });
    saveLocalStorage({ label: 'softSkills', data: softSkills });

    const technicalStorageData = getDataLocalStorage({ label: 'technicalSkills' });
    const softStorageData = getDataLocalStorage({ label: 'softSkills' });


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
                (technicalStorageData?.data?.length > 0) && (
                    <Stack className='px-6 pt-2'>
                        <Stack spacing={1}>
                            {
                                technicalStorageData.data.map(item => (
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
                (softStorageData?.data?.length > 0) && (
                    <Stack className='px-6 pt-2'>
                        <Stack spacing={1}>
                            {
                                softStorageData.data.map(item => (
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

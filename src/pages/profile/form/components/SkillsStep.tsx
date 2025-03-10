import { Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'
import TechnicalSkillsPopup from './TechnicalSkillsPopup'
import SoftSkillsPopup from './SoftSkillsPopup'
import { useDeleteTechnicalSkillMutation, useGetAllTechnicalSkillsQuery } from '@/services/public/technicalSkills'
import { useDeleteSoftSkillMutation, useGetAllSoftSkillsQuery } from '@/services/public/softSkills'
import { getDataLocalStorage, saveLocalStorage } from '@/utilis/helpers'
import DeletePopup from '@/components/common/DeletePopup'

const SkillsStep = () => {
    const { data: technicalSkills } = useGetAllTechnicalSkillsQuery({});
    const { data: softSkills } = useGetAllSoftSkillsQuery({});

    const [deleteSoftSkill] = useDeleteSoftSkillMutation();
    const [deleteTechnicalSkill] = useDeleteTechnicalSkillMutation();

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
                                                <TechnicalSkillsPopup singleData={item} />

                                                <DeletePopup deleteFunc={deleteTechnicalSkill} id={item?.id} deleteItemName="Technical skill" />
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
                                                <SoftSkillsPopup singleData={item} />

                                                <DeletePopup deleteFunc={deleteSoftSkill} id={item?.id} deleteItemName="Soft skill" />
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

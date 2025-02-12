import { Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import ExperienceFormModal from './ExperienceFormModal'
import { Delete, Edit } from '@mui/icons-material'
import TechnicalSkillsPopup from './TechnicalSkillsPopup'
import SoftSkillsPopup from './SoftSkillsPopup'

const SkillsStep = () => {
    return (
        <>
            <Toolbar className='flex justify-between mb-2'>
                <Typography variant='h4'>
                    Technical  Skills
                </Typography>

                <TechnicalSkillsPopup />
            </Toolbar>

            <Divider />

            <Toolbar className='flex justify-between my-2'>
                <Typography variant='h4'>
                    Soft  Skills
                </Typography>

                <SoftSkillsPopup />
            </Toolbar>

            <Divider />

            <Stack className='px-6 pt-2'>


                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant='h6'>
                            Javascript
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
                </Stack>

            </Stack>



        </>
    )
}

export default SkillsStep

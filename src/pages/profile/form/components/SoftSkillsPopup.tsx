import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Add } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, Stack } from '@mui/material';
import { useState } from 'react'

const SoftSkillsPopup = () => {

    const [isModalOpen, setModalStatus] = useState(false);

    return (
        <>
            <IconButton onClick={() => setModalStatus(true)}>
                <Add />
            </IconButton>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Soft Skill' minWidth='400px'>
                <Box minWidth={'400px'}>
                    <FormikWrapper formInitials={{}} submitFunc={() => { }}>
                        <Stack spacing={2}>

                            <FormikField
                                name='Skill'
                                label='Skill'
                                isRequired
                            />


                            <Stack direction={'row'} justifyContent={'end'} spacing={2}>
                                <Button variant='outlined'>
                                    Cancel
                                </Button>
                                <Button variant='contained'>
                                    Add
                                </Button>
                            </Stack>
                        </Stack>
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    )
}

export default SoftSkillsPopup

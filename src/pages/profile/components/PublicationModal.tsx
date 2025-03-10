import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Box, Button, Grid2, Stack } from '@mui/material';
import React, { useState } from 'react'
import SkillsInput from './AddSkillsField';
import FormikSkillsInput from '@/components/form/FormikSkillsInput';

const PublicationModal = () => {
    const [isModalOpen, setModalStatus] = useState(false);
    return (
        <>

            <Box onClick={() => setModalStatus(true)} className="w-full">
                Publications
            </Box>


            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title='Add Publications'>
                <Box minWidth={'100%'}>
                    <FormikWrapper formInitials={{}} submitFunc={() => { }}>
                        <Stack spacing={2}>
  

                            <FormikField
                                name='authorName'
                                label='Author Name'
                                isRequired
                            />

                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='title'
                                            label='Title'
                                            isRequired
                                        />

                                        <FormikField
                                            name='authorName'
                                            label='Second Author'
                                        />
                                    </Stack>
                                </Grid2>
    
                                <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
                                    <Stack spacing={2}>
                                        <FormikField
                                            name='publisherName'
                                            label='Publisher Name'
                                            isRequired
                                        />

                                        <FormikDatePicker
                                            name='publicationDate'
                                            label='Publication Date'
                                            isRequired
                                        />
                                    </Stack>
                                </Grid2>
                            </Grid2>



                            <Box my={3}>
                                <FormikField name='url' label='Publish Url' />
                            </Box>

                            <FormikTextEditor
                                name='description'
                            />


                            <Stack direction={'row'} justifyContent={'end'} spacing={2}>
                                <Button variant='outlined'>
                                    Cancel
                                </Button>
                                <Button type='submit' variant='contained'>
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

export default PublicationModal

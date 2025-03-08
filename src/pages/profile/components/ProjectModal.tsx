import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import CommonModal from '@/components/common/CommonModal';
import FormikCheckbox from '@/components/form/FormikCheckbox';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import FormikTextEditor from '@/components/form/FormikTextEditor';
import FormikWrapper from '@/components/form/FormikWrapper';
import { Box, Button, Stack } from '@mui/material';
import FormikSkillsInput from '@/components/form/FormikSkillsInput';
import { useGetAllExperienceQuery } from '@/services/public/experience';
import { optionsMaker } from '@/utilis/helpers';
import { useGetAllEducationQuery } from '@/services/public/education';
import { projectModalInitialValues } from '../utilis/formUtilis';
import { useCreatePortfolioMutation, useGetAllPortfolioQuery } from '@/services/public/portfolio';
import moment from 'moment';
import { useCreateProjectMutation, useGetAllProjectQuery } from '@/services/public/project';

const ProjectModal = () => {
    const [isModalOpen, setModalStatus] = React.useState(false);

    const [addPortfolio] = useCreatePortfolioMutation();
    const [addProject] = useCreateProjectMutation();

    const handleSubmitForm = async (values: any) => {
        const technicalSkills = Array.isArray(values.technicalSkills)
            ? values.technicalSkills.join(',')
            : '';

        let { accociatedWithFreelance, ...newValues } = values;

        if (accociatedWithFreelance) {
            newValues = { ...newValues, isPrivate: false };
            await addPortfolio({ ...newValues, technicalSkills });
        } else {
            await addProject({ ...newValues, technicalSkills });
        }

    };

    return (
        <>
            <Box onClick={() => setModalStatus(true)} className="w-full">
                Projects
            </Box>

            <CommonModal isOpen={isModalOpen} toggle={() => setModalStatus(false)} title="Add Project">
                <Box minWidth={'100%'}>
                    <FormikWrapper
                        formInitials={projectModalInitialValues}
                        submitFunc={handleSubmitForm}
                    >
                        <ProjectFormContent />
                    </FormikWrapper>
                </Box>
            </CommonModal>
        </>
    );
};

const ProjectFormContent = () => {
    const { values, setFieldValue } = useFormikContext();

    const { data: experienceData } = useGetAllExperienceQuery({});
    const { data: educationData } = useGetAllEducationQuery({});

    const { data: portfolioData } = useGetAllPortfolioQuery({});
    const {data: projectsData} = useGetAllProjectQuery({});

    console.log('portfolioData ==> ', portfolioData, projectsData)

    const experienceOptions = optionsMaker({
        optionsArray: experienceData?.data || [],
        label: 'title',
        value: 'id'
    })

    const educationOptions = educationData?.data?.length > 0 ? educationData.data.map(item => (
        {
            label: `${item?.school} (${item?.degree})`,
            value: item?.id
        }
    )) : [];

    // Handle disabling fields based on selection
    useEffect(() => {
        if (values.educationId) {
            setFieldValue('experienceId', null);
            setFieldValue('accociatedWithFreelance', false);
        } else if (values.experienceId) {
            setFieldValue('educationId', null);
            setFieldValue('accociatedWithFreelance', false);
        } else if (values.accociatedWithFreelance) {
            setFieldValue('educationId', null);
            setFieldValue('experienceId', null);
        }
    }, [values.educationId, values.experienceId, values.accociatedWithFreelance, setFieldValue]);

    return (
        <Stack spacing={2}>
            <FormikField name="name" label="Project Name" isRequired />

            <Box my={3}>
                <FormikCheckbox name="currentlyWorking" label="Currently working" />
            </Box>

            <Stack spacing={2} direction="row">
                <FormikDatePicker name="startDate" label="Start Date" isRequired />
                <FormikDatePicker name="endDate" label="End Date" minDate={moment(values?.startDate)} isRequired  isDisable={values?.currentlyWorking}/>
            </Stack>

            <FormikAutoCompleteSelect
                name="experienceId"
                label="Associate with experience"
                options={experienceOptions}
                isRequired
                isDisabled={!!values.educationId || !!values.accociatedWithFreelance}
            />

            <FormikAutoCompleteSelect
                name="educationId"
                label="Associate with education"
                options={educationOptions}
                isRequired
                isDisabled={!!values.experienceId || !!values.accociatedWithFreelance}
            />

            <Box my={3}>
                <FormikCheckbox
                    name="accociatedWithFreelance"
                    label="Associated with freelance"
                    disabled={!!values.educationId || !!values.experienceId}
                />
            </Box>

            <FormikSkillsInput name="technicalSkills" label="Technical Skills" />
            <FormikField name="projectUrl" label="Project URL" />
            <FormikTextEditor name="description" />

            <Stack direction="row" justifyContent="end" spacing={2}>
                <Button variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">
                    Add
                </Button>
            </Stack>
        </Stack>
    );
};

export default ProjectModal;

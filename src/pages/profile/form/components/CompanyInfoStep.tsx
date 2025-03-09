import { useTranslation } from 'react-i18next';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikRadio from '@/components/form/FormikRadio';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import { Alert, Avatar, Box, Grid2, Paper, Stack, Typography } from '@mui/material';
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { useState } from 'react';
import { countriesOptions } from '@/utilis/helpers';
import DropzoneFileUploader from './DropzoneFileUploader';

import * as pdfjs from 'pdfjs-dist';
import mammoth from 'mammoth';
import { useFormikContext } from 'formik';
import FormikAvatar from '@/components/form/FormikAvatar';
import CommonModal from '@/components/common/CommonModal';
import LinkedinImg from '@/assets/imgs/linkedin-save-pdf.png';
import { ArrowForward, CloudUpload } from '@mui/icons-material';

const CompanyInfoStep = () => {
  const { t } = useTranslation(); // Hook for translations

  const [profileLevelDesp, setProfileLevelDesp] = useState('{Description}');
  const [isResumeModalOpen, setResumeModalStatus] = useState(false);

  const { setFieldValue, values } = useFormikContext();

  // Handlers
  const handleToggleResumeModal = () => setResumeModalStatus((prev: boolean) => !prev);

  const handleFileUpload = async (file: File) => {
    console.log('Uploaded file:', file);

    if (file.type === 'application/pdf') {
      extractTextFromPDF(file);
      setResumeModalStatus(false);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      extractTextFromDocx(file);
      setResumeModalStatus(false);
    }
  };

  const extractTextFromPDF = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const typedarray = new Uint8Array(reader.result as ArrayBuffer);
      const pdf = await pdfjs.getDocument({ data: typedarray }).promise;
      let extractedText = '';

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        extractedText += textContent.items.map((item: any) => item.str).join(' ') + '\n';
      }

      parseCVText(extractedText, setFieldValue); // Pass setFieldValue
    };

    reader.readAsArrayBuffer(file);
  };

  const extractTextFromDocx = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const result = await mammoth.extractRawText({ arrayBuffer: reader.result as ArrayBuffer });
      parseCVText(result.value, setFieldValue);
    };

    reader.readAsArrayBuffer(file);
  };

  const parseCVText = (text: string, setFieldValue: any) => {
    console.log('Extracted CV Text:', text);

    let nameMatch = text.match(/(?:First Name|Full Name|Given Name)\s*([\w\s]+)/i);


    if (!nameMatch) {
      nameMatch = text.match(/^([A-Za-z]+(?:\s[A-Za-z]+){1,2})/m);
    }

    const passportMatch = text.match(/Passport Number:\s*([\w\d]+)/i);
    const nationalityMatch = text.match(/Nationality:\s*([A-Za-z\s]+)/i);

    console.log('Extracted Name:', nameMatch ? nameMatch[1] : 'Not found');

    if (nameMatch) {
      const [firstName, ...lastName] = nameMatch[1].trim().split(' ');
      setFieldValue('firstName', firstName || '');
      setFieldValue('lastName', lastName.join(' ') || '');
    }

    if (passportMatch) setFieldValue('passportNumber', passportMatch[1]);
    if (nationalityMatch) setFieldValue('nationality', nationalityMatch[1]);
  };


  const uploadResumeSteps = [
    {
      title: 'Step 1',
      subtitle: 'Log in to your LinkedIn profile page'
    },
    {
      title: 'Step 2',
      subtitle: 'Click the More... button and select Save to PDF'
    },
    {
      title: 'Step 3',
      subtitle: 'Upload your LinkedIn Profile'
    }
  ]

  return (
    <>
      <Typography variant="h4">{t('company_info')}</Typography>
      <Stack direction={'row'} gap={2} className="my-6">
        <FormikAvatar name="artifactUrl" is64base />

        <Stack spacing={2}>
          <Typography variant="body1">{t('profile_level')}*</Typography>

          <FormikRadio
            name="profileLevel"
            options={[
              { value: 'Student', label: t('student'), selectedValue: 'Student profile is for students' },
              { value: 'Professional', label: t('skilled'), selectedValue: 'Professional profile is related to professional life' },
              { value: 'Non Professional', label: t('non_skilled'), selectedValue: 'Non Professional profile is like laborers, electricians, etc.' },
            ]}
            onChange={(_, __, value) => {
              console.log('value?.selectedValue ==> ', value?.selectedValue)
              setProfileLevelDesp(value?.selectedValue)
            }}
          />
        </Stack>
      </Stack>

      <Alert severity="info" className='mt-2 mb-4'>{profileLevelDesp}</Alert>

      <Box className="flex gap-4 my-4">
        <DropzoneFileUploader label="Upload your Resume" onFileUpload={handleFileUpload} />

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            width: 300,
            textAlign: "center",
            cursor: "pointer",
            border: "2px dashed #ccc",
            bgcolor: "background.paper",
          }}
          onClick={handleToggleResumeModal}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <CloudUpload color="primary" fontSize="large" />
            <Typography variant="body1" color="textSecondary">
              {"Drop the file here..."}
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Grid2 container spacing={2}>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField name="firstName" label={t('first_name')} isRequired />
            <FormikDatePicker name="dateOfBirth" label={t('dob')} isRequired />
            <FormikField name="language" label={t('language')} isRequired />
            <FormikField name="passportNumber" label={t('passport')} />
          </Stack>
        </Grid2>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField name="lastName" label={t('last_name')} isRequired />
            <FormikAutoCompleteSelect name="nationality" label={t('nationality')} options={countriesOptions} isRequired />
            <FormikAutoCompleteSelect name="workCountry" label={t('work_country')} options={countriesOptions} isRequired />
            <FormikField name="idNumber" label={t('id_number')} />
          </Stack>
        </Grid2>
      </Grid2>

      <CommonModal isOpen={Boolean(isResumeModalOpen)} toggle={handleToggleResumeModal} title='Import your Linkedin Profile' minWidth='60%' maxWidth={'600px'}>
        <Box >

          <Stack direction={'row'} gap={3} alignItems={'center'} justifyContent={'center'} minWidth={'100%'} my={3}>
            <img src={LinkedinImg} className='w-[400px]' />

            <ArrowForward />

            <DropzoneFileUploader label="Upload your LinkedIn Profile" onFileUpload={handleFileUpload} />
          </Stack>

          <Stack direction={'row'} gap={4} justifyContent={'center'} mb={4}>
            {
              uploadResumeSteps.map((item, index) => (
                <Stack gap={2} key={item?.title + index} alignItems={'center'}>
                  <Typography variant='h6'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2'>
                    {item.subtitle}
                  </Typography>
                </Stack>
              ))
            }
          </Stack>
        </Box>
      </CommonModal>
    </>
  );
};

export default CompanyInfoStep;

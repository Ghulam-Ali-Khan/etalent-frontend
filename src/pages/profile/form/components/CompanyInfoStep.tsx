import { useTranslation } from 'react-i18next';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikRadio from '@/components/form/FormikRadio';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import { Alert, Avatar, Box, Grid2, Stack, Typography } from '@mui/material';
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { useState } from 'react';
import { countriesOptions } from '@/utilis/helpers';
import DropzoneFileUploader from './DropzoneFileUploader';

import * as pdfjs from 'pdfjs-dist';
import mammoth from 'mammoth';
import { useFormikContext } from 'formik';

const CompanyInfoStep = () => {
  const { t } = useTranslation(); // Hook for translations

  const { setFieldValue } = useFormikContext();
  

  const [profileLevelDesp, setProfileLevelDesp] = useState('{Description}');

  const handleFileUpload = async (file: File) => {
    console.log('Uploaded file:', file);
  
    if (file.type === 'application/pdf') {
      extractTextFromPDF(file);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      extractTextFromDocx(file);
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

  return (
    <>
      <Typography variant="h4">{t('company_info')}</Typography>
      <Stack direction={'row'} gap={2} className="my-6">
        <Avatar src={AvatarImg} sx={{ width: 100, height: 100 }} />

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
        <DropzoneFileUploader label="Upload your LinkedIn Profile" onFileUpload={handleFileUpload} />
      </Box>

      <Grid2 container spacing={2}>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField name="firstName" label={t('first_name')} isRequired />
            <FormikDatePicker name="dateOfBirth" label={t('dob')} isRequired />
            <FormikField name="language" label={t('language')} isRequired />
            <FormikField name="passportNumber" label={t('passport')} isRequired />
          </Stack>
        </Grid2>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField name="lastName" label={t('last_name')} isRequired />
            <FormikAutoCompleteSelect name="nationality" label={t('nationality')} options={countriesOptions} isRequired />
            <FormikAutoCompleteSelect name="workCountry" label={t('work_country')} options={countriesOptions} isRequired />
            <FormikField name="idNumber" label={t('id_number')} isRequired />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CompanyInfoStep;

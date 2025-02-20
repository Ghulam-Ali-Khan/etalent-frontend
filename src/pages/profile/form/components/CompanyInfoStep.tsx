import { useTranslation } from 'react-i18next';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikRadio from '@/components/form/FormikRadio';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import { Alert, Avatar, Grid2, Stack, Typography } from '@mui/material';
import AvatarImg from '@/assets/imgs/avatar-1.jpg';
import { useState } from 'react';
import { countriesOptions } from '@/utilis/helpers';

const CompanyInfoStep = () => {
  const { t } = useTranslation(); // Hook for translations

  const [profileLevelDesp, setProfileLevelDesp] = useState('{Description}')

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

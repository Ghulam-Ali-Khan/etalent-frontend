import { useTranslation } from 'react-i18next';
import FormikDatePicker from '@/components/form/FormikDatepicker';
import FormikField from '@/components/form/FormikField';
import FormikRadio from '@/components/form/FormikRadio';
import FormikAutoCompleteSelect from '@/components/form/FormikSelect';
import { Avatar, Grid2, Stack, Typography } from '@mui/material';
import AvatarImg from '@/assets/imgs/avatar-1.jpg';

const CompanyInfoStep = () => {
  const { t } = useTranslation(); // Hook for translations

  return (
    <>
      <Typography variant="h4">{t('company_info')}</Typography>

      <Stack direction={'row'} gap={2} className="my-6">
        <Avatar src={AvatarImg} sx={{ width: 100, height: 100 }} />

        <Stack spacing={2}>
          <Typography variant="body1">{t('profile_level')}*</Typography>

          <FormikRadio
            name="profile_level"
            options={[
              { value: 'student', label: t('student') },
              { value: 'skilled', label: t('skilled') },
              { value: 'non_skilled', label: t('non_skilled') },
            ]}
          />
        </Stack>
      </Stack>

      <Grid2 container spacing={2}>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField name="first_name" label={t('first_name')} isRequired />
            <FormikDatePicker name="dob" label={t('dob')} isRequired />
            <FormikField name="language" label={t('language')} isRequired />
            <FormikField name="passport" label={t('passport')} isRequired />
          </Stack>
        </Grid2>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField name="last_name" label={t('last_name')} isRequired />
            <FormikField name="nationality" label={t('nationality')} isRequired />
            <FormikAutoCompleteSelect name="country" label={t('work_country')} options={[]} isRequired />
            <FormikField name="id_number" label={t('id_number')} isRequired />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CompanyInfoStep;

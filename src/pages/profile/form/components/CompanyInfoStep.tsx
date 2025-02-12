import FormikDatePicker from '@/components/form/FormikDatepicker'
import FormikField from '@/components/form/FormikField'
import FormikRadio from '@/components/form/FormikRadio'
import FormikAutoCompleteSelect from '@/components/form/FormikSelect'
import { Avatar, Grid2, Stack, Typography } from '@mui/material'
import AvatarImg from '@/assets/imgs/avatar-1.jpg';

const CompanyInfoStep = () => {
  return (
    <>
      <Typography variant='h4'>
        Company Info
      </Typography>

      <Stack direction={'row'} gap={2} className='my-6'>

        <Avatar src={AvatarImg} sx={{ width: 100, height: 100 }} />

        <Stack spacing={2}>
          <Typography variant='body1'>
            Profile Level*
          </Typography>

          <FormikRadio
            name="profile_level"
            options={[
              {
                value: 'student',
                label: 'Student'
              },
              {
                value: 'skilled',
                label: 'Skilled'
              },
              {
                value: 'non_skilled',
                label: 'Non Skilled'
              }
            ]}
          />
        </Stack>

      </Stack>

      <Grid2 container spacing={2}>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField
              name='first_name'
              label='First Name'
              isRequired
            />

            <FormikDatePicker
              name='dob'
              label='Date of birth'
              isRequired
            />

            <FormikField
              name='language'
              label='Language'
              isRequired
            />

            <FormikField
              name='passport'
              label='Passport/License number'
              isRequired
            />
          </Stack>
        </Grid2>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Stack spacing={2}>
            <FormikField
              name='lasst_name'
              label='Last Name'
              isRequired
            />

            <FormikField
              name='nationality'
              label='Nationality'
              isRequired
            />

            <FormikAutoCompleteSelect
              name='country'
              label='Work Country'
              options={[]}
              isRequired
            />

            <FormikField
              name='id_number'
              label='Last Digit Id Number'
              isRequired
            />
          </Stack>
        </Grid2>
      </Grid2>
    </>
  )
}

export default CompanyInfoStep

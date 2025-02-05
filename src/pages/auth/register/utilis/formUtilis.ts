
import * as Yup from 'yup';

// Dynamic initial values based on the selected tab
export const initialValues = (tabValue: number) => ({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: tabValue === 1 ? '' : undefined, // Only include for 'Employer' tab
});

// Dynamic validation schema based on the selected tab
export const validationSchema = (tabValue: number) => (Yup.object({
    email: Yup.string()
        .required('Email is required')
        .email('Please enter a valid email'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    companyName: tabValue === 1
        ? Yup.string().required('Company Name is required') // Only for 'Employer' tab
        : Yup.string().notRequired(),
}));

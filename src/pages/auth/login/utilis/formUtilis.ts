import { FormInitialValuesTypes } from "../types/Form";
import * as Yup from 'yup';

export const initialValues: FormInitialValuesTypes = {
    email: '',
    password: '',
    rememberMe: true, // Default checked in the checkbox
};


// Validation schema
export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .required('Email or Talent ID is required')
        .email('Please enter a valid email'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    rememberMe: Yup.boolean(),
});


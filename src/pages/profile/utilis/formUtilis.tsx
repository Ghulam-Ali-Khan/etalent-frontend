import * as yup from "yup";
import { Category, Group, Link, LocationOn, Person, Reviews, School } from "@mui/icons-material";

export const steps = [
    { icon: <Person />, title: 'Profile' },
    { icon: <LocationOn />, title: 'Address' },
    { icon: <School />, title: 'Education' },
    { icon: <Group />, title: 'Experience' },
    { icon: <Category />, title: 'Skill' },
    { icon: <Link />, title: 'Links' },
    { icon: <Reviews />, title: 'Review' },
];


export const companyInfoStepValidation = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    profileLevel: yup.string().required("Profile Level is required"),
    dateOfBirth: yup
        .date()
        .required("Date of Birth is required")
        .nullable()
        .typeError("Invalid date"),
    nationality: yup.string().required("Nationality is required"),
    language: yup.string().required("Language is required"),
    workCountry: yup.string().required("Work Country is required"),
});


export const educationValidationSchema = yup.object({
    school: yup.string().required('University is required'),
    degree: yup.string().required('Degree is required'),
    startDate: yup.date().nullable().required('Start Date is required'),
    schoolUrl: yup.string().url('Enter a valid URL').required('School / University URL is required'),
    fieldOfStudy: yup.string().required('Field of Study is required'),
    endDate: yup.date()
        .nullable()
        .min(yup.ref('startDate'), 'End Date cannot be before Start Date'),
    currentlyEnrolled: yup.boolean(),
    grade: yup.string().required('Grade/CGPA is required'),
    city: yup.string().required('City is required'),
    country: yup.string().nullable().required('Country is required'),
    state: yup.string().required('Province/State is required'),
});

export const educationInitialValues = {
    school: '',
    degree: '',
    startDate: null,
    schoolUrl: '',
    fieldOfStudy: '',
    endDate: null,
    currentlyEnrolled: false,
    grade: '',
    city: '',
    country: null,
    state: ''
};

export const companyInfoStepInitials = {
    firstName: "",
    lastName: "",
    profileLevel: "",
    dateOfBirth: '2025-02-21T00:00:00Z', // Since it's nullable
    nationality: "",
    language: "",
    workCountry: "",
    availabilities: [],
    artifactUrl: '',
    willingToTravel: false,
    willingToRelocate: false,
    idNumber:'',
    passportNumber:''
};

export const stepsValidations = [
    companyInfoStepValidation
]

export const stepsInitials = [
    companyInfoStepInitials
]
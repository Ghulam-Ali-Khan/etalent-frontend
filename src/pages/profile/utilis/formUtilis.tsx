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

export const certificateInitialValues = {
    title: '',
    certificationId: '',
    organizationName: '',
    organizationUrl: '',
    issueDate: null,
    expireDate: null,
    doesntExpire: false,
    score: 0,
    artifactUrl: '',
};

export const publicationInitialValues = {
    title: '',
    authorName: '',
    publisherName: '',
    publicationDate: null, // Assuming this is a date object
    url: '',
    description: '',
};

export const awardInitialValues = {
    title: '',
    issuer: '',
    issuingDate: null,
    description: '',
};

export const awardValidationSchema = yup.object().shape({
    title: yup.string()
        .required('Award Title is required'),
    issuer: yup.string()
        .required('Award Issuer is required'),
    issuingDate: yup.date()
        .required('Issue Date is required'),
    description: yup.string()
        .optional(), // You can add more validation rules if needed
});

export const publicationValidationSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required'),
    authorName: yup.string()
        .optional(),
    publisherName: yup.string()
        .required('Publisher Name is required'),
    publicationDate: yup.date()
        .required('Publication Date is required')
        .nullable(),
    url: yup.string()
        .url('Must be a valid URL')
        .optional(),
    description: yup.string()
        .optional(),

});

export const certificateValidationSchema = yup.object().shape({
    title: yup.string().required('Name is required'),
    certificationId: yup.string(),
    organizationName: yup.string().required('Issuing Organization Name is required'),
    organizationUrl: yup.string().url('Enter a valid URL'),
    issueDate: yup.date().required('Issue Date is required'),
    expireDate: yup.date()
        .nullable()
        .min(yup.ref('issueDate'), 'End Date cannot be before Issue Date')
        .when('doesntExpire', {
            is: false,
            then: (schema) => schema.required('End Date is required'),
        }),
    doesntExpire: yup.boolean(),
    score: yup.string(),
    artifactUrl: yup.string().nullable(),
});

export const overviewInitialValues = {
    overviewDetail: '',
}


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
    artifactUrl: yup.string().required("Profile image is required"),
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

export const experienceValidationSchema = yup.object({
    title: yup.string().required('Title is required'),
    employmentType: yup.string().required('Employment Type is required'),
    company: yup.string().required('Company is required'),
    city: yup.string().required('City/State is required'),
    industry: yup.string().required('Industry is required'),
    country: yup.string().required('Country is required'),
    currentlyWorking: yup.boolean(),
    startDate: yup.date().required('Start Date is required'),
    endDate: yup.date().required('End Date is required'),
    description: yup.string().nullable()
});

const addressValidationSchema = yup.object({
    address1: yup.string().required('Street is required'),
    address2: yup.string().required('Flat/Suit No. is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    postalCode: yup.string()
        .matches(/^\d{5}(-\d{4})?$/, 'Invalid Zip Code') // Supports 5-digit or 9-digit format (e.g., 12345 or 12345-6789)
        .required('Zip Code is required'),
});

const socialLinksValidationSchema = yup.object({
    linkedin: yup.string().required('Linkedin is required'),
});


export const technicalSkillsSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required("Skill is required"),

    experience: yup.number()
        .typeError("Experience must be a number")
        .required("Experience is required")
        .min(0, "Experience cannot be negative")
        .max(50, "Experience must be at most 50 years")
});

export const softSkillsSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required("Skill is required"),
});

export const softSkillsInitialValues = {
    name: "",
};

export const technicalSkillsInitialValues = {
    name: "",
    experience: ""
};

export const experienceInitialValues = {
    title: '',
    employmentType: '',
    company: '',
    city: '',
    industry: '',
    country: '',
    endDate: '',
    startDate: '',
    currentlyWorking: false,
    description: ''
};



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
    artifactUrl: null,
    willingToTravel: false,
    willingToRelocate: false,
    idNumber: '',
    passportNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
};


export const projectModalInitialValues = {
    name: '', // Project Name
    currentlyWorking: false, // Checkbox for currently working
    startDate: null, // Project start date
    endDate: null, // Project end date
    experienceId: null, // Associated experience (if any)
    educationId: null, // Associated education (if any)
    accociatedWithFreelance: false, // Checkbox for freelance association
    technicalSkills: [], // Array for technical skills input
    projectUrl: '', // Project URL
    description: '', // Rich text editor for project description
};

export const projectValidationSchema = yup.object().shape({
    name: yup.string().required('Project Name is required'),
    startDate: yup.date().required('Start Date is required'),
    endDate: yup.date().required('End Date is required').nullable().min(yup.ref('startDate'), 'End Date must be after Start Date'),
});




export const stepsValidations = [
    companyInfoStepValidation,
    addressValidationSchema,
    null,
    null,
    null,
    socialLinksValidationSchema
];



export const stepsInitials = [
    companyInfoStepInitials,
    educationInitialValues,
    {},
    {},
    {},
    {}
];
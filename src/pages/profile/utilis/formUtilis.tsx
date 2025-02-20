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

export const companyInfoStepInitials = {
    firstName: "",
    lastName: "",
    profileLevel: "",
    dateOfBirth: null, // Since it's nullable
    nationality: "",
    language: "",
    workCountry: "",
    availabilities: [],
    artifactUrl: '',
    willingToTravel: 0,
    willingToRelocate: 0,
};


export const stepsValidations = [
    companyInfoStepValidation
]

export const stepsInitials = [
    companyInfoStepInitials
]
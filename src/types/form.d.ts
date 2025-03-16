import React from "react";

export interface FormikFieldProps {
    name: string;
    label?: string;
    textArea?: boolean;
    icon?: React.ReactNode;
    isPasswordField?: boolean;
    type?: string;
    placeholder?: string;
    onBlur?: (value: string) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onInputChange?: Function;
    isRequired?: boolean;
    minRows?: number;
    disabled?: boolean;
    isRow?: boolean;
    classes?: string;
    depenpencyArray?: unknown[];
    labelMarginBottom?: string;
    isLarge?: boolean;
}

export interface PasswordState {
    show: boolean;
    type: string;
}

export interface FormikWrapperProps<T> {
    formInitials: {}, // Type for form initial values
    formSchema?: any; // Type for validation schema (e.g., Yup schema)
    submitFunc: Function// Type for submit function
    children: React.ReactNode; // Children to render inside the Formik form
  }
  
  export interface SubmitFormParamsTypes {
    values: object,
    [key: string]: any
}

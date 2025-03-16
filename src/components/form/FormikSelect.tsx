import React from 'react';

// pkgs
import { useField } from 'formik';
import { CloseOutlined } from '@mui/icons-material';
import { Autocomplete, Chip, FormHelperText, InputLabel, Stack, TextField } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';

// Define types for the options
interface Option {
    label: string;
    value: string | number;
}

interface FormikAutoCompleteSelectProps {
    name: string;
    options: Option[]; // Array of options with 'label' and 'value'
    label?: string;
    placeholder?: string;
    isDisabled?: boolean;
    onChange?: (newValue: Option | null) => void; // onChange handler for the selected value
    onBlur?: (newValue: Option | null) => void; // onBlur handler
    onInputChange?: (newValue: Option | null) => void;
    isRequired?: boolean;
    isOptional?: boolean;
    onChangeInput?: (inputValue: string) => void; // onInputChange handler for the input value
}

const FormikAutoCompleteSelect: React.FC<FormikAutoCompleteSelectProps> = ({
    name,
    options,
    label,
    placeholder = "Please Select",
    isDisabled = false,
    onChange,
    onInputChange,
    onBlur,
    isRequired,
    isOptional,
    onChangeInput,
}) => {
    const [field, meta, helpers] = useField(name || '');
    const { value, ...restField } = field;
    const { touched, error } = meta;
    const { setValue } = helpers;

    const handleInputChange = useDebouncedCallback(
        (value: any) => {
            console.log('input change value ==> ', value)
            if (onChangeInput) onChangeInput(value);
        },
        500
    );

    // Enhanced filter logic to match substrings case-insensitively
    const filterOptions = (inputValue: string) => {
        const searchTerms = inputValue.toLowerCase().split(' '); // Split input into individual terms
        return options.filter((option) => {
            const label = option.label.toLowerCase();
            // Check if all search terms exist in the label
            return searchTerms.every((term) => label.includes(term));
        });
    };

    return (
        <>
            <Stack spacing={1}>
                {label && (
                    <InputLabel
                        className={isRequired ? 'required' : isOptional ? 'optional' : ''}
                        htmlFor={name}>
                        {label}
                    </InputLabel>
                )}
                <Autocomplete
                    fullWidth
                    id={name}
                    options={options}
                    getOptionLabel={(item) => item.label}
                    value={options.find((option) => option.value === value) || null}
                    onInputChange={(event, inputValue) => {
                        if (onChangeInput) handleInputChange(inputValue);
                    }}
                    filterOptions={(options, { inputValue }) => filterOptions(inputValue)} // Enhanced filtering
                    onChange={(event, newValue) => {
                        setValue(newValue?.value || '');
                        if (onChange) onChange(newValue);
                    }}
                    onBlur={(e: any, newValue: any) => {
                        if (onBlur) onBlur(newValue);
                    }}
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            name={name}
                            placeholder={placeholder}
                        />
                    )}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                key={index}
                                {...getTagProps({ index })}
                                variant="combined"
                                label={option.label}
                                deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                                sx={{ color: 'text.primary', width: '30%' }}
                            />
                        ))
                    }
                    disabled={isDisabled}
                />

                {touched && error && <FormHelperText error>{error}</FormHelperText>}
            </Stack>
        </>
    );
};

export default FormikAutoCompleteSelect;

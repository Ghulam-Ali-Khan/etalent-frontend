import React from 'react';

// pkgs
import { useField } from 'formik';
import { CloseOutlined } from '@mui/icons-material';
import { Autocomplete, Chip, FormHelperText, InputLabel, Stack, TextField } from '@mui/material';

// Define types for the options
interface Option {
  label: string;
  value: string | number;
}

interface FormikAutoMultipleSelectProps {
  name: string;
  options: Option[]; // Array of options with 'label' and 'value'
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  onChange?: (selectedValues: (string | number)[]) => void; // onChange handler for the selected values
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // onBlur handler
  isRequired?: boolean;
  isOptional?: boolean;
  onChangeInput?: (inputValue: string) => void; // onInputChange handler for the input value
}

const FormikAutoMultipleSelect: React.FC<FormikAutoMultipleSelectProps> = ({
  name,
  options,
  label,
  placeholder = "Please Select",
  isDisabled = false,
  onChange,
  onBlur,
  isRequired,
  isOptional,
  onChangeInput,
}) => {
  const [field, meta, helpers] = useField(name || '');
  const { value, ...restField } = field;
  const { touched, error } = meta;
  const { setValue } = helpers;

  // Enhanced filter logic to match substrings case-insensitively
  const filterOptions = (inputValue: string): Option[] => {
    const searchTerms = inputValue.toLowerCase().split(' '); // Split input into individual terms
    return options.filter((option) => {
      const label = option.label.toLowerCase();
      // Check if all search terms exist in the label
      return searchTerms.every((term) => label.includes(term));
    });
  };

  return (
    <Stack spacing={1}>
      {label && (
        <InputLabel
          className={isRequired ? 'required' : isOptional ? 'optional' : ''}
          htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <Autocomplete
        multiple // Enables multiple select
        fullWidth
        id={name}
        options={options}
        getOptionLabel={(item) => item.label}
        value={options.filter((option) => value.includes(option.value))} // Map selected values
        onInputChange={(event, inputValue) => {
          if (onChangeInput) onChangeInput(inputValue);
        }}
        filterOptions={(options, { inputValue }) => filterOptions(inputValue)} // Enhanced filtering
        onChange={(event, newValue) => {
          const selectedValues = newValue.map((item) => item.value); // Extract selected values
          setValue(selectedValues); // Update Formik field with array of selected values
          if (onChange) onChange(selectedValues);
        }}
        onBlur={(e) => {
          if (onBlur) onBlur(e);
        }}
        renderInput={(params) => (
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
              sx={{ color: 'text.primary' }}
            />
          ))
        }
        disabled={isDisabled}
      />
      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </Stack>
  );
};

export default FormikAutoMultipleSelect;

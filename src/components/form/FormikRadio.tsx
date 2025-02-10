import { useCallback, useEffect, useState } from 'react';

// Packages
import {
  FormHelperText,
  InputLabel,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useField } from 'formik';
import { useDebouncedCallback } from 'use-debounce';

// Styles
import { FormikFieldProps } from '@/types/form';

// Define the shape of the option object in the options array
interface Option {
  value: string;
  label: string;
}

// Define the component props interface
interface FormikRadioProps {
  name: string;
  label?: string;
  options: Option[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: string) => void;
  isRequired?: boolean;
  depenpencyArray?: any[]; // You can replace `any[]` with a more specific type if needed
  isStack?: boolean;
}

const FormikRadio: React.FC<FormikRadioProps> = ({
  name,
  label,
  options = [],
  onChange,
  onBlur,
  isRequired,
  depenpencyArray = [],
  isStack = false,
}) => {
  const [field, meta, helpers] = useField(name || '');

  const { value, onBlur: onFieldBlur, ...restField } = field;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const [innerValue, setInnerValue] = useState<string>('');

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setInnerValue(value);
    }
  }, [value]);

  const debouncingCallback = useDebouncedCallback(() => {
    setValue(innerValue);
  }, 500);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInnerValue(e.target.value);
      if (onChange) onChange(e);
      debouncingCallback();
    },
    [...depenpencyArray, onChange]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onFieldBlur(e);
      if (onBlur) onBlur(e.target.value);
    },
    [...depenpencyArray, onBlur]
  );

  return (
    <Stack spacing={1}>
      {label && (
        <InputLabel className={isRequired ? 'required' : ''} htmlFor={name}>
          {label}
        </InputLabel>
      )}

      <RadioGroup
        id={`${name}`}
        {...restField}
        value={innerValue}
        onChange={handleChange}
        onBlur={handleBlur}
        row={!isStack}
      >
        {options.map((option: Option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>

      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </Stack>
  );
};

export default FormikRadio;

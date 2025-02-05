import React, { useCallback, } from 'react';
import { FormControlLabel, Checkbox, FormHelperText, Typography, Grid2 } from '@mui/material';
import { useField } from 'formik';
import { FormikFieldProps } from '@/types/form';

const FormikCheckbox: React.FC<FormikFieldProps> = ({
    name,
    label,
    isRequired = false,
    disabled = false,
    classes = '',
}) => {
    const [field, meta, helpers] = useField(name);
    const { value, onBlur, ...restField } = field;
    const { touched, error } = meta;
    const { setValue } = helpers;

    // Handle the change event for the checkbox
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.checked);
        },
        [setValue]
    );

    return (
        <Grid2 className={classes} spacing={1} container>

            <Grid2 size={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            {...restField}
                            checked={value || false}
                            onChange={handleChange}
                            onBlur={onBlur}
                            disabled={disabled}
                        />
                    }
                    label={label}
                />

                {touched && error && <FormHelperText error>{error}</FormHelperText>}
            </Grid2>

        </Grid2>
    );
};

export default FormikCheckbox;

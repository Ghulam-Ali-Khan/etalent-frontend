import React, { useCallback, useEffect, useState } from 'react';
import {
    TextField,
    FormHelperText,
    InputAdornment,
    IconButton,
    Typography,
    Grid2,
} from '@mui/material';
import { RemoveRedEyeOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { useField } from 'formik';
import { useDebouncedCallback } from 'use-debounce';
import { FormikFieldProps, PasswordState } from '@/types/form';


const FormikField: React.FC<FormikFieldProps> = ({
    name,
    label,
    textArea = false,
    icon,
    isPasswordField = false,
    type = 'text',
    placeholder = 'Please Enter',
    onBlur,
    onChange,
    onInputChange,
    isRequired = false,
    minRows,
    disabled = false,
    isRow = false,
    classes = '',
    depenpencyArray = [],
    labelMarginBottom = '0px',
    isLarge = false,
}) => {
    const [field, meta, helpers] = useField(name);

    const { value, onBlur: onFieldBlur, ...restField } = field;
    const { touched, error } = meta;
    const { setValue } = helpers;

    const [innerValue, setInnerValue] = useState<string>('');
    const [password, setPassword] = useState<PasswordState>({
        show: false,
        type: 'password',
    });

    useEffect(() => {
        if (value !== undefined && value !== null) {
            setInnerValue(value);
        }
    }, [value]);

    const debouncingCallback = useDebouncedCallback(() => {
        setValue(innerValue);
    }, 500);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setInnerValue(e.target.value);
            if (onChange) onChange(e);
            debouncingCallback();
        },
        [...depenpencyArray, onChange]
    );

    const handleBlur = useCallback(
        (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            onFieldBlur(e);
            if (onBlur) onBlur(e.target.value);
        },
        [...depenpencyArray, onBlur]
    );

    const togglePasswordField = useCallback(() => {
        setPassword(prevObj => ({
            show: !prevObj.show,
            type: prevObj.show ? 'password' : 'text',
        }));
    }, []);

    return (
        <Grid2 className={classes} spacing={1} container>
            <Grid2
                className="d-flex align-items-center"
                size={{ xl: (isRow ? 3 : 12), lg: (isRow ? 3 : 12), md: (isRow ? 4 : 12), sm: 12, xs: 12 }}
            >
                {label && (
                    <Typography
                        className={isRequired ? 'required' : ''}
                        variant="body2"
                        sx={{ mb: `${labelMarginBottom} !important` }}
                    >
                        {label}
                    </Typography>
                )}
            </Grid2>
            <Grid2
                size={{ xl: (isRow ? 9 : 12), lg: (isRow ? 9 : 12), md: (isRow ? 8 : 12), sm: 12, xs: 12 }}
            >
                {textArea ? (
                    <textarea
                        {...restField}
                        name={name}
                        className="w-100"
                        rows={minRows}
                        onChange={handleChange}
                        value={innerValue}
                    />
                ) : (
                    <TextField
                        fullWidth
                        multiline={textArea}
                        rows={minRows}
                        id={name}
                        {...restField}
                        type={isPasswordField ? (password.show ? 'text' : 'password') : type}
                        value={innerValue}
                        onChange={handleChange}
                        // size='small'
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
                                endAdornment: isPasswordField && (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={togglePasswordField}
                                        >
                                            {password.show ? <RemoveRedEyeOutlined /> : <VisibilityOffOutlined />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                sx: { fontSize: 12, height: isLarge ? '45px' : undefined },
                            }
                        }}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                )}

                {touched && error && <FormHelperText error>{error}</FormHelperText>}
            </Grid2>
        </Grid2>
    );
};

export default FormikField;

import React, { useCallback, useEffect, useState } from 'react';

// Pkgs
import moment, { Moment } from 'moment';
import { useField, useFormikContext } from 'formik';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FormHelperText, useMediaQuery, InputLabel, Stack } from '@mui/material';

// Updated type for views
type DateView = 'year' | 'month' | 'day'; // MUI DatePicker supports these views

interface FormikDatePickerProps {
    name: string;
    views?: readonly DateView[]; // This should be a readonly array of 'year', 'month', or 'day'
    placeholder?: string;
    onChange?: (value: string, name: string) => void;
    minDate?: Moment;
    maxDate?: Moment;
    isDisable?: boolean;
    excludeDates?: string[];
    disableFuture?: boolean;
    disablePast?: boolean;
    label?: string;
    dateFormate?: string;
    displayFormate?: string;
    isRequired?: boolean;
    isOptional?: boolean;
    dependencyArray?: any[];
}

const FormikDatePicker: React.FC<FormikDatePickerProps> = ({
    name,
    views,
    placeholder,
    onChange,
    minDate,
    maxDate,
    isDisable,
    excludeDates,
    disableFuture,
    disablePast,
    label,
    dateFormate = "YYYY-MM-DD",
    displayFormate = "DD/MM/YYYY",
    isRequired,
    isOptional,
    dependencyArray = [],
}) => {
    const [innerValue, setInnerValue] = useState<Moment | null>(null);

    // check large screen
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

    // Formik
    const { values } = useFormikContext();
    const [field, meta, helpers] = useField(name || '');
    const { setValue } = helpers;
    const { value } = field;
    const { error, touched } = meta;

    // Handlers
    const handleChange = useCallback(
        (newMoment: Moment | null) => {
            const formattedValue = newMoment?.format(dateFormate) || '';

            if (newMoment) {
                setValue(formattedValue);
                setInnerValue(newMoment);
            } else {
                setValue('');
                setInnerValue(null);
            }

            if (onChange) onChange(formattedValue, name);
        },
        [values, ...dependencyArray]
    );

    useEffect(() => {
        if (value !== '' && value !== undefined && value !== null) {
            setInnerValue(moment(value, dateFormate));
        } else {
            setInnerValue(null);
        }
    }, [value, dateFormate]);

    return (
        <Stack spacing={1}>
            {label && (
                <InputLabel
                    className={isRequired ? 'required' : isOptional ? 'optional' : ''}
                    htmlFor={name}
                >
                    {label}
                </InputLabel>
            )}

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    className="w-100"
                    name={name}
                    views={views}
                    value={innerValue}
                    onChange={handleChange}
                    disabled={isDisable}
                    disablePast={disablePast}
                    disableFuture={disableFuture}
                    minDate={minDate}
                    maxDate={maxDate}
                    format={displayFormate}
                    shouldDisableDate={(date: any) => {
                        let newDate = '';

                        excludeDates?.forEach((item) => {
                            if (date.format(dateFormate) === item) {
                                newDate = item;
                            }
                        });

                        return !!newDate;
                    }}
                    desktopModeMediaQuery={
                        isLargeScreen ? '@media (pointer: fine)' : '@media (pointer: coarse)'
                    }
                    slotProps={{ textField: { size: 'medium' } }}
                />

                {touched && error && <FormHelperText error>{error}</FormHelperText>}
            </LocalizationProvider>
        </Stack>
    );
}

export default FormikDatePicker;

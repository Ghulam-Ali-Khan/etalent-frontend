import React, { useState } from 'react';
import { TextField, Button, Chip, Stack, Box, FormHelperText, Typography } from '@mui/material';
import { useField } from 'formik';

const FormikSkillsInput = ({ name, label }) => {
    const [field, meta, helpers] = useField(name);
    const { value = [] } = field;
    const { touched, error } = meta;
    const { setValue } = helpers;

    const [skill, setSkill] = useState('');

    const handleAddSkill = () => {
        if (skill && !value?.includes(skill)) {
            setValue([...value, skill]);
            setSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setValue(value.filter((skill) => skill !== skillToRemove));
    };

    return (
        <>

            <Box className="flex gap-2 items-end">
                <Stack
                    className='w-full'
                    gap={2}
                >
                    {label && (
                        <Typography
                            variant="body2"
                        >
                            {label}
                        </Typography>
                    )}

                    <TextField
                        // label={label || "Add Skill"}
                        // multiline
                        // variant="outlined"
                        placeholder='Add skills'
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                    />
                </Stack>
                <Button variant="outlined" onClick={handleAddSkill} sx={{ minWidth: '100px' }}>
                    Add Skill
                </Button>
            </Box>

            <Stack direction="row" spacing={1} style={{ marginTop: 10 }}>
                {value?.map((skill, index) => (
                    <Chip
                        key={index}
                        label={skill}
                        onDelete={() => handleRemoveSkill(skill)}
                        color="primary"
                    />
                ))}
            </Stack>
            {touched && error && <FormHelperText error>{error}</FormHelperText>}
        </>
    );
};

export default FormikSkillsInput;

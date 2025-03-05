import React, { useState } from 'react';
import { TextField, Button, Chip, Stack, Box } from '@mui/material';

function SkillsInput() {
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);

    const handleAddSkill = () => {
        if (skill && !skills.includes(skill)) {
            setSkills([...skills, skill]);
            setSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove: any) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };

    return (
        <>
            <Box className="flex gap-2 w">
                <TextField
                    label="Add Skill"
                    variant="outlined" 
                    className='w-full'
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                />
                <Button variant="outlined" onClick={handleAddSkill} sx={{minWidth:'100px'}}>
                    Add Skill
                </Button>
            </Box>

            <Stack direction="row" spacing={1} style={{ marginTop: 10 }}>
                {skills.map((skill, index) => (
                    <Chip
                        key={index}
                        label={skill}
                        onDelete={() => handleRemoveSkill(skill)}
                        color="primary"
                    />
                ))}
            </Stack>
        </>
    );
}

export default SkillsInput;

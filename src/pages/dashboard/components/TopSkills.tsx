import React from 'react';
import { Chip, Box, Stack, Typography, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

const skills = [
  'Enterprise Java',
  'API Development',
  'Python',
  'Cloud Computing',
  'Enterprise Java',
  'API Development',
  'Python',
  'Cloud Computing',
];

const TopSkills = () => {
  return (
    <Stack>

      <Stack direction={'row'} justifyContent={'space-between'} my={1}>
        <Typography variant='body1' fontWeight={600}>
          Top Skills
        </Typography>

        <IconButton>
          <Add />
        </IconButton>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          maxWidth: '100%', // Adjust width as needed
          // padding: 1
        }}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            sx={{
              backgroundColor: '#ccf6e4',
              color: '#1b5e20',
              fontWeight: 500,
              borderRadius: '16px',

            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default TopSkills;

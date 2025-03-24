import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    title: 'Lead Software Engineer',
    company: 'Tech Innovators Inc.',
    date: 'Jan 2018 - Present',
    description:
      'Led dev team to design scalable software, improve performance, and mentor junior engineers.',
  },
  {
    title: 'Senior Developer',
    company: 'CodeCrafters Ltd.',
    date: 'Mar 2013 - Dec 2017',
    description:
      'Developed and maintained web apps, collaborated to define requirements, and optimized existing codebases.',
  },
  {
    title: 'Senior Developer',
    company: 'CodeCrafters Ltd.',
    date: 'Mar 2013 - Dec 2017',
    description:
      'Developed and maintained web apps, collaborated to define requirements, and optimized existing codebases.',
  },
  {
    title: 'Senior Developer',
    company: 'CodeCrafters Ltd.',
    date: 'Mar 2013 - Dec 2017',
    description:
      'Developed and maintained web apps, collaborated to define requirements, and optimized existing codebases.',
  },
];

const ExperienceSection = () => {
  return (
    <Box p={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          Experience
        </Typography>
        <Typography variant="h6" fontWeight={600}>⋯</Typography>
      </Stack>

      <Stack spacing={3}>
        {experiences.map((exp, index) => (
          <Stack direction="row" spacing={2} alignItems="flex-start" key={index}>
            <WorkIcon color="primary" />

            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {exp.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.company} • <span style={{ color: '#888', fontSize:'12px' }}>{exp.date}</span>
              </Typography>
              <Typography variant="body2" mt={0.5}>
                {exp.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceSection;

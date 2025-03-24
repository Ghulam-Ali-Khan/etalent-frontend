import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const applications = [
  {
    position: 'Software Architect',
    company: 'Innovatech Solutions',
    type: 'Full-Time',
    workModel: 'Remote',
    date: 'May 15, 2024',
    status: 'Interviewing',
  },
  {
    position: 'Senior Backend Developer',
    company: 'NexGen Technologies',
    type: 'Full-Time',
    workModel: 'Hybrid',
    date: 'May 10, 2024',
    status: 'Awaiting Response',
  },
  {
    position: 'DevOps Engineer',
    company: 'CloudWave Inc.',
    type: 'Contract',
    workModel: 'Remote',
    date: 'May 5, 2024',
    status: 'Applied',
  },
  {
    position: 'Lead Software Developer',
    company: 'BrightFuture Tech',
    type: 'Full-Time',
    workModel: 'On-Site',
    date: 'April 30, 2024',
    status: 'Rejected',
  },
  {
    position: 'API Specialist',
    company: 'TechSphere Ltd.',
    type: 'Part-Time',
    workModel: 'Remote',
    date: 'April 25, 2024',
    status: 'Offered',
  },
];

const typeColors = {
  'Full-Time': 'primary',
  'Part-Time': 'info',
  'Contract': 'success',
};

const statusColors = {
  'Interviewing': 'success',
  'Awaiting Response': 'success',
  'Applied': 'info',
  'Rejected': 'error',
  'Offered': 'success',
};

const ApplicationsTable = () => {
  return (
    <Paper className='p-2'>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          Applications
        </Typography>
        <Box display="flex" gap={1}>
          <TextField
            placeholder="Search employee, department, etc"
            size="small"
            variant="outlined"
            sx={{ background: '#f1f1f1', borderRadius: 2 }}
          />
          <Button
            variant="contained"
            startIcon={<FilterAltIcon />}
          >
            Filter
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Employment Type</TableCell>
            <TableCell>Work Model</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {applications.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>
                <Chip
                  label={row.type}
                  size="small"
                  color={typeColors[row.type] || 'default'}
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
              </TableCell>
              <TableCell>{row.workModel}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  size="small"
                  color={statusColors[row.status] || 'default'}
                  sx={{
                    backgroundColor:
                      row.status === 'Awaiting Response' ? '#d3f9d8' :
                      row.status === 'Rejected' ? '#f8d7da' :
                      row.status === 'Applied' ? '#d0e6ff' :
                      undefined,
                    color:
                      row.status === 'Rejected' ? '#b71c1c' :
                      undefined,
                    fontWeight: 500,
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ApplicationsTable;

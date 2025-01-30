import { Typography, TextField, Button, Grid2, Container, Stack } from "@mui/material";

import LogoImg from '@/assets/imgs/logo.png';

const Footer = () => {
  return (
    <Container maxWidth='xl' sx={{ marginY: 6 }}>
      <Grid2 container spacing={4} justifyContent="space-between">
        {/* Logo Section */}
        <Grid2 size={{ xs: 12, sm: 3 }}>
          <img src={LogoImg} className="w-[100px]" />
        </Grid2>

        {/* About Us Section */}
        <Grid2 size={{ xs: 12, sm: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            About Us
          </Typography>
          <Stack spacing={1} mt={2}>
            <Typography variant="body2">About JobLink</Typography>
            <Typography variant="body2">Team</Typography>
            <Typography variant="body2">Careers</Typography>
          </Stack>
        </Grid2>

        {/* Job Seekers Section */}
        <Grid2 size={{ xs: 12, sm: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Job Seekers
          </Typography>

          <Stack spacing={1} mt={2}>
            <Typography variant="body2">Browse Jobs</Typography>
            <Typography variant="body2">How it Works</Typography>
            <Typography variant="body2">FAQ</Typography>
          </Stack>
        </Grid2>

        {/* Employers Section */}
        <Grid2 size={{ xs: 12, sm: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Employers
          </Typography>
          <Stack spacing={1} mt={2}>
            <Typography variant="body2">Post a Job</Typography>
            <Typography variant="body2">Employer Portal</Typography>
            <Typography variant="body2">Success Stories</Typography>
          </Stack>
        </Grid2>

        {/* Newsletter Section */}
        <Grid2 size={{ xs: 12, sm: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Newsletter
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Email Address"
            fullWidth
            sx={{ mb: 1, mt: 1 }}
          />
          <Button variant="contained">
            Subscribe
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Footer;

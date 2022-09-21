import { Grid } from '@mui/material';
import * as React from 'react';
import Button from '../models/Button';
import Typography from '../models/Typography';
import MainLayout from './MainLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80';

export default function Main() {
  return (
    <MainLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Grid>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href=""
        sx={{ minWidth: 200 }}
      
      >
        Register
      </Button>
      <Button
        color="primary"
        variant="contained"
        size="large"
        component="b"
        href=""
        sx={{ minWidth: 200 }}
        
      >
        LOgin
      </Button>
      </Grid>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </MainLayout>
  );
}
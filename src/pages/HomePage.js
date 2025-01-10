import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import TravelCard from '../components/TravelCard';

// Import images
import parisImage from '../assets/images/paris.jpg';
import nycImage from '../assets/images/nyc.jpg';
import tokyoImage from '../assets/images/tokyo.jpg';

const HomePage = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        paddingTop: '50px',
        backgroundColor: 'black', // Page background
        paddingBottom: '50px',
        minHeight: '100vh', // Ensures the background covers the full viewport
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ color: 'lime', fontWeight: 'bold', marginBottom: '20px' }}
      >
        Welcome to WanderShare
      </Typography>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        style={{ color: 'white', marginBottom: '40px' }}
      >
        Connect with like-minded travelers and discover hidden gems across the globe.
      </Typography>

      {/* Travel Cards */}
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <TravelCard
          destination="Paris"
          description="A city full of culture and history."
          image={parisImage}
        />
        <TravelCard
          destination="New York"
          description="A fast-paced city with endless opportunities."
          image={nycImage}
        />
        <TravelCard
          destination="Tokyo"
          description="A mix of modern and traditional Japan."
          image={tokyoImage}
        />
      </Box>

      <Box textAlign="center" style={{ marginTop: '50px' }}>
        <Button
          variant="outlined"
          onClick={() => alert('Exploring now!')}
          style={{
            color: 'lime',
            borderColor: 'lime',
            padding: '10px 20px',
            fontSize: '14px',
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;

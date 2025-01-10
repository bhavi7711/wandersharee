import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const user = {
  name: 'John Doe',
  bio: 'Adventurer. Travel Blogger. Explorer of hidden gems around the world.',
  profileImage: 'https://example.com/profile-image.jpg', // Replace with actual image or leave as a placeholder
};

const ProfilePage = () => {
  return (
    <Box
      style={{
        backgroundColor: 'black', // Entire page background
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Paper
        elevation={5}
        style={{
          backgroundColor: 'white', // Profile box background
          maxWidth: '400px',
          width: '100%',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: 'lime',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Profile
        </Typography>

        <Box
          component="img"
          src={user.profileImage}
          alt={`${user.name}'s Profile`}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            marginBottom: '20px',
          }}
        />

        <Typography
          variant="h6"
          style={{
            color: 'black',
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          {user.name}
        </Typography>

        <Typography
          variant="body1"
          style={{
            color: 'gray',
            fontSize: '14px',
            marginBottom: '10px',
          }}
        >
          {user.bio}
        </Typography>

        <Typography
          variant="body2"
          style={{
            color: 'black',
            fontSize: '12px',
          }}
        >
          Ready to explore the world? Share your adventures with others!
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProfilePage;

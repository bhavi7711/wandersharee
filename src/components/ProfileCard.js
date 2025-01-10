import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProfileCard = ({ user }) => {
  return (
    <Card style={{ width: '300px', backgroundColor: 'white', marginBottom: '20px' }}>
      <CardMedia
        component="img"
        height="200"
        image={user.profileImage}
        alt={user.name}
        style={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="textSecondary">{user.bio}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

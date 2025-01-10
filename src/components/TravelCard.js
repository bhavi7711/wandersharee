import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const TravelCard = ({ destination, description, image }) => {
  return (
    <Card
      sx={{
        width: 250,
        margin: '20px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '8px',
        boxShadow: 'none',
      }}
    >
      {/* Display Image */}
      <CardMedia
        component="img"
        alt={destination}
        height="140"
        image={image} // Set the image source here
        sx={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
      />
      <CardContent>
        <Typography variant="h6" color="black">
          {destination}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TravelCard;

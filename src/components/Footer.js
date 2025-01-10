import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        fontSize: '14px',
      }}
    >
      <Typography variant="body2">© 2025 WanderShare. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;

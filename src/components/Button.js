import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: 'limegreen',
        color: 'black',
        borderRadius: '25px',
        padding: '10px 20px',
        border: 'none',
        marginTop: '20px',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

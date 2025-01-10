import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: 'lime' }}>
          WanderShare
        </Typography>
        <Button color="inherit">
          <Link to="/" style={{ color: 'lime', textDecoration: 'none' }}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/profile" style={{ color: 'lime', textDecoration: 'none' }}>Profile</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

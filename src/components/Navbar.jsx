import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const services = [
  'Recruiting of Drivers',
  'Recruiting of Domestic Workers',
  'Sales of Cars',
  'Land and Properties',
  'Educational Consultant',
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Modawa Consulting Services
        </Typography>
  <Button color="inherit" component={Link} to="/">Home</Button>
        <Button
          color="inherit"
          onClick={handleMenu}
        >
          Our Services
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/drivers">Recruiting of Drivers</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/domestic">Recruiting of Domestic Workers</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/cars">Sales of Cars, Land & Properties</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/education">Educational Consultant</MenuItem>
        </Menu>
  <Button color="inherit" component={Link} to="/about">About-Us</Button>
  <Button color="inherit" component={Link} to="/zobo">Zobo-Drink</Button>
  <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <IconButton color="inherit" href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

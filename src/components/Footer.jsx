import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 4, mt: 4 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1, minWidth: 220, mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">Modawa Consulting Ventures</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Your trusted partner for consulting services, recruitment, sales, and education.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, minWidth: 180, mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">Quick Links</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
            <Button color="inherit" href="#" sx={{ textAlign: 'left' }}>Home</Button>
            <Button color="inherit" href="#about" sx={{ textAlign: 'left' }}>About Us</Button>
            <Button color="inherit" href="#services" sx={{ textAlign: 'left' }}>Our Services</Button>
            <Button color="inherit" href="#zobo" sx={{ textAlign: 'left' }}>Zobo-Drink</Button>
          </Box>
        </Box>
        <Box sx={{ flex: 1, minWidth: 220, mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">Our Services</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
            <Typography variant="body2">Recruiting of Drivers</Typography>
            <Typography variant="body2">Recruiting of Domestic Workers</Typography>
            <Typography variant="body2">Sales of Cars, Land & Properties</Typography>
            <Typography variant="body2">Educational Consultant</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1, minWidth: 220, mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">Connect With Us</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>modawaconsultingventures@gmail.com</Typography>
          <Typography variant="body2">+234 8020975420</Typography>
          <Typography variant="body2">+234 7032702287</Typography>
          <Typography variant="body2">+234 9064030517</Typography>
          <Box sx={{ mt: 1 }}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="body2">
          &copy; 2025 Modawa Consulting Ventures. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

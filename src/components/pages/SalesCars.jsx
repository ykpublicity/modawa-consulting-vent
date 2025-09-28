import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

export default function SalesCars() {
  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4, p: 2 }}>
      <Card sx={{ mb: 3 }}>
        <CardMedia
          component="img"
          height="220"
          image="/car-sales.jpg"
          alt="Sales of Cars, Land & Properties"
        />
      </Card>
      <Button href="#services" variant="outlined" sx={{ mb: 2 }}>Back to Services</Button>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Sales of Cars, Land & Properties</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Your one-stop solution for buying and selling vehicles, land, and real estate properties with expert guidance.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        At Modawa Consulting Ventures, we pride ourselves on providing exceptional services tailored to your needs. Our team of experts is dedicated to ensuring you receive the best possible experience and outcomes.
      </Typography>
      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="body2">• Professional and vetted experts</Typography>
        <Typography variant="body2">• Streamlined and efficient process</Typography>
        <Typography variant="body2">• Dedicated customer support</Typography>
      </Stack>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Whether you're looking for talent, property, or educational advice, we are here to guide you every step of the way.
      </Typography>
      <Button variant="contained" color="primary" href="#contact">Get in Touch</Button>
    </Box>
  );
}

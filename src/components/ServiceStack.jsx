import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const services = [
  {
    title: 'Recruiting of Drivers',
    image: '/carDriver.jpg',
    link: '#drivers',
    description: 'We recruit professional and reliable drivers for your personal and business needs, ensuring safety and efficiency.',
  },
  {
    title: 'Recruiting of Domestic Workers',
    image: '/cleaners.jpg',
    link: '#domestic',
    description: 'Find trustworthy and skilled domestic workers to help manage your home, from cleaning to childcare.',
  },
  {
    title: 'Sales of Cars, Land & Properties',
    image: '/car-sales.jpg',
    link: '#cars',
    description: 'Your one-stop solution for buying and selling vehicles, land, and real estate properties with expert guidance.',
  },
  {
    title: 'Educational Consultant',
    image: '/education.jpg',
    link: '#education',
    description: 'Expert guidance for your educational journey, from school selection and admissions to career planning.',
  },
];

export default function ServiceStack() {
  return (
    <Box sx={{ flexGrow: 1, px: 2, py: 4 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={service.title} display="flex">
            <Card sx={{ width: '100%', height: '100%', bgcolor: 'background.paper', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {service.title}
                </Typography>
                {service.description && (
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {service.description}
                  </Typography>
                )}
                <Button variant="contained" color="primary" href={service.link}>
                  {['Recruiting of Drivers', 'Recruiting of Domestic Workers', 'Educational Consultant'].includes(service.title) ? 'Read More' : 'Learn More'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

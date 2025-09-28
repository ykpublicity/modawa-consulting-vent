import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    title: 'Welcome to Modawa Consulting Services',
    image: '/hero1.jpg',
    description: 'Your trusted partner for recruitment, sales, and consulting.',
  },
  {
    title: 'Recruiting of Drivers',
    image: '/carDriver.jpg',
    description: 'Professional driver recruitment for your needs.',
  },
  {
    title: 'Recruiting of Domestic Workers',
    image: '/cleaners.jpg',
    description: 'Trusted domestic staff for your home.',
  },
  {
    title: 'Sales of Cars',
    image: '/car-sales.jpg',
    description: 'Quality cars for sale at great prices.',
  },
  {
    title: 'Land and Properties',
    image: '/carDriveer2.jpg',
    description: 'Prime land and property sales.',
  },
  {
    title: 'Educational Consultant',
    image: '/education.jpg',
    description: 'Expert educational consulting services.',
  },
];

export default function HeroSlider() {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {slides.map((slide) => (
          <Box key={slide.title} sx={{ position: 'relative', height: 400, background: '#eee' }}>
            <img src={slide.image} alt={slide.title} style={{ width: '100%', height: 400, objectFit: 'cover' }} />
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0,0,0,0.4)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h3" fontWeight="bold">{slide.title}</Typography>
              <Typography variant="h6">{slide.description}</Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

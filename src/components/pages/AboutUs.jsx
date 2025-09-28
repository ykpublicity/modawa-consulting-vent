import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const team = [
  {
    name: 'Mr. Jalili Musliudeen Modawa',
    title: 'Founder & CEO',
    description: 'With a wealth of experience and a passion for excellence, Olayinka leads Modawa Consulting Ventures with a commitment to integrity and client success.',
    image: '/ceo.jpg',
  },
  {
    name: 'Oluwaseunfummi Osho',
    title: 'Head of Recruitment',
    description: 'Specializes in sourcing top-tier talent and ensuring a perfect fit for both our clients and candidates.',
    image: '/head-of-recruit.jpg',
  },
  {
    name: 'Lateefat Akorede',
    title: 'General Manager',
    description: 'John brings deep market knowledge and negotiation expertise to help clients navigate the property landscape with confidence.',
    image: '/manager.jpg',
  },
  {
    name: 'Bilikis Adebowale',
    title: 'Lead Property Consultant',
    description: 'John brings deep market knowledge and negotiation expertise to help clients navigate the property landscape with confidence.',
    image: '/lead-property.jpg',
  },
];

export default function AboutUs() {
  return (
    <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 4, p: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">About Us</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>The story behind Modawa Consulting Ventures.</Typography>
      </Box>
      <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, boxShadow: 2, p: 4, mb: 6 }}>
        <Typography variant="h4" fontWeight="bold" color="secondary" sx={{ mb: 2, textAlign: 'center' }}>Our Mission</Typography>
        <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>
          Our mission is to be the most trusted and reliable partner for our clients, providing exceptional consulting, recruitment, and sales services. We strive to empower individuals and businesses by connecting them with opportunities and solutions that foster growth and success. We are dedicated to building lasting relationships based on integrity, professionalism, and a deep understanding of our clients' needs.
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="primary" sx={{ mb: 1 }}>Meet Our Team</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>The dedicated professionals behind our success.</Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={member.name} display="flex">
            <Card sx={{ width: '100%', height: '100%', bgcolor: 'background.paper', boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', mb: 2 }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle1" fontWeight="bold">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">{member.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{member.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

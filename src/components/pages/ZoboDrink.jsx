import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function ZoboDrink() {
  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4, p: 2 }}>
      <Card sx={{ mb: 3 }}>
        <CardMedia
          component="img"
          height="220"
          image="/zobo.jpg"
          alt="Zobo Drink"
        />
      </Card>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Discover the Taste of Zobo-Drink</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Experience the refreshing and invigorating taste of Zobo-Drink, a traditional beverage crafted with care and passion. Made from the finest natural ingredients, our Zobo-Drink is a delightful fusion of hibiscus flowers, ginger, and a blend of exotic spices.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Perfect for any occasion, it's more than just a drink – it's a celebration of culture and flavor. Enjoy it chilled on a warm day or as a unique mixer in your favorite cocktails.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Health Benefits:</strong> Rich in antioxidants and known for its various health-promoting properties, Zobo-Drink is a guilt-free pleasure you can enjoy anytime.
      </Typography>
      <Button variant="contained" color="primary" href="#contact">Inquire About Zobo-Drink</Button>
    </Box>
  );
}

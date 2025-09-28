import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We'd love to hear from you! You can reach us via email or phone.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Our Contact Information</Typography>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Email</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>For inquiries, partnership, or support, please email us.</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>modawaconsultingventures@gmail.com</Typography>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>Phone</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>You can also reach us at any of the numbers below.</Typography>
      <Typography variant="body2">• +234 8020975420</Typography>
      <Typography variant="body2">• +234 7032702287</Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>• +234 9064030517</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Send Us a Message</Typography>
        <Stack spacing={2}>
          <TextField label="Name" name="name" value={form.name} onChange={handleChange} required fullWidth />
          <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth />
          <TextField label="Message" name="message" value={form.message} onChange={handleChange} required multiline rows={4} fullWidth />
          <Button type="submit" variant="contained" color="primary">Send Message</Button>
        </Stack>
        {submitted && (
          <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
            Thank you for contacting us! We'll get back to you soon.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

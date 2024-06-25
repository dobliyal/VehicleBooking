import React from 'react';
import { Container, Typography } from '@mui/material';

function Confirmation({ formData }) {
    const personalDetails = JSON.parse(localStorage.getItem('personalDetails') || '{}');
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails') || '{}');
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hi {personalDetails.name},
      </Typography>
      <Typography variant="h6">
        Your booking is scheduled at {bookingDetails.appointmentTime} on {bookingDetails.appointmentDate}.
      </Typography>
    </Container>
  );
}

export default Confirmation;

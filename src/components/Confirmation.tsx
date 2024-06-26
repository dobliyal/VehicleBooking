import React from 'react';
import { Container, Typography } from '@mui/material';

// interface ConfirmationProps {
//   formData: {
//     [key: string]: any;
//   };
// }

interface PersonalDetails {
  name?: string;
}

interface BookingDetails {
  appointmentTime?: string;
  appointmentDate?: string;
}

const Confirmation: React.FC = () => {
  const personalDetails: PersonalDetails = JSON.parse(localStorage.getItem('personalDetails') || '{}');
  const bookingDetails: BookingDetails = JSON.parse(localStorage.getItem('bookingDetails') || '{}');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hi {personalDetails.name || 'Guest'},
      </Typography>
      <Typography variant="h6">
        Your booking is scheduled at {bookingDetails.appointmentTime || 'N/A'} on {bookingDetails.appointmentDate || 'N/A'}.
      </Typography>
    </Container>
  );
};

export default Confirmation;


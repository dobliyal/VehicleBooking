import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  appointmentDate: yup.date().required('Appointment date is required'),
  appointmentTime: yup.string().required('Appointment time is required'),
});

function BookingDetails() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

const onSubmit = (data) => {
    const formattedData = {
      ...data,
      appointmentDate: new Date(data.appointmentDate).toISOString().split('T')[0],
    };
    localStorage.setItem('bookingDetails', JSON.stringify(formattedData));
    navigate('/confirmation');
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Booking Details</h1>
        <Controller
          name="appointmentDate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Appointment Date"
              type="date"
              variant="outlined"
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors.appointmentDate}
              helperText={errors.appointmentDate ? errors.appointmentDate.message : ''}
            />
          )}
        />
        <Controller
          name="appointmentTime"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Appointment Time"
              type="time"
              variant="outlined"
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={!!errors.appointmentTime}
              helperText={errors.appointmentTime ? errors.appointmentTime.message : ''}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Book
        </Button>
      </form>
    </Container>
  );
}

export default BookingDetails;

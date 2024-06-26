import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PersonalDetailsForm {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string(),
});

const PersonalDetails: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<PersonalDetailsForm>({
    resolver: yupResolver(schema),
  });
  
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<PersonalDetailsForm> = (data) => {
    localStorage.setItem('personalDetails', JSON.stringify(data));
    navigate('/service-details');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Personal Details</h1>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ''}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.address}
              helperText={errors.address ? errors.address.message : ''}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </form>
    </Container>
  );
};

export default PersonalDetails;

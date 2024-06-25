import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  vehicleType: yup.string().required('Vehicle type is required'),
  vehicleModel: yup.string().required('Vehicle model is required'),
});
const vehicleTypes = ["car", "bike", "scooty", "truck"];
function ServiceDetails() {
  const { control, handleSubmit, formState: { errors } } = useForm({
   // defaultValues: {...formData},
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
   // updateFormData(data);
   localStorage.setItem('vehicleDetails',JSON.stringify(data));
    navigate('/booking-details');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Service Details</h1>
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Vehicle Type</InputLabel>
          <Controller
            name="vehicleType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Vehicle Type"
                error={!!errors.vehicleType}
              >
                {vehicleTypes.map((type) => (
        <MenuItem key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </MenuItem>
      ))}
              </Select>
            )}
          />
          {errors.vehicleType && <p>{errors.vehicleType.message}</p>}
        </FormControl>
        
        <Controller
          name="vehicleModel"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Vehicle Model"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.vehicleModel}
              helperText={errors.vehicleModel ? errors.vehicleModel.message : ''}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </form>
    </Container>
  );
}

export default ServiceDetails;

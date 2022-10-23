import React from 'react';
import {
  Box, Select, MenuItem, FormControl, InputLabel, TextField, Button,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import useCustomers from '../../lib/data/customers/useCustomers';
import useVehicles from '../../lib/data/vehicles/useVehicles';

interface IProps {
  onSubmit: (values: any) => void;
  onClose: () => void
}

const AddRentalForm = ({ onSubmit, onClose }: IProps) => {
  const { customers } = useCustomers();
  const { vehicles } = useVehicles();

  const {
    handleSubmit, control,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column">
        {customers && (
          <Controller
            name="customerID"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth variant="standard">
                <InputLabel>Customer</InputLabel>
                <Select
                  {...field}
                  fullWidth
                  label="Customer"
                  style={{ marginTop: 15, width: '40%' }}
                  required
                >
                  {
                customers.map((customer) => (
                  <MenuItem key={customer.id} value={customer.id}>{customer.name}</MenuItem>
                ))
              }
                </Select>
              </FormControl>
            )}
          />
        )}

        {vehicles && (
          <Controller
            name="vehicleID"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl fullWidth variant="standard">
                <InputLabel>Vehicle</InputLabel>
                <Select
                  {...field}
                  fullWidth
                  label="Vehicle"
                  style={{ marginTop: 15, width: '40%' }}
                  required
                >
                  {
                vehicles.map((vehicle) => (
                  <MenuItem key={vehicle.id} value={vehicle.id}>{vehicle.title}</MenuItem>
                ))
              }
                </Select>
              </FormControl>
            )}
          />
        )}
        <Controller
          name="rentalStartAt"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              variant="standard"
              label="Rental start"
              type="datetime-local"
              style={{ marginTop: 15, width: '40%' }}
              InputLabelProps={{
                shrink: true,
              }}
              required
              {...field}
            />
          )}
        />
        <Controller
          name="plannedRentalEndAt"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              variant="standard"
              label="Planned rental start"
              type="datetime-local"
              style={{ marginTop: 10, width: '40%' }}
              required
              InputLabelProps={{
                shrink: true,
              }}
              {...field}
            />
          )}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button color="error" variant="outlined" onClick={onClose}>cancel</Button>
          <Button type="submit" color="success" variant="outlined" style={{ marginLeft: 8 }}>submit</Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddRentalForm;

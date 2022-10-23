import {
  Dialog, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import React from 'react';
import { useSWRConfig } from 'swr';
import usePoster from '../lib/data/usePoster';
import AddRentalForm from './Rental/AddRentalForm';

interface IProps {
  open: boolean;
  onClose: () => void;
}

const AddRentalDialog = ({ open, onClose }: IProps) => {
  const { post } = usePoster();
  const { mutate } = useSWRConfig();

  const onSubmit = async (values: any) => {
    await post('/rentals/create', { ...values });
    await mutate('/rentals');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle>
        Add a new car rental
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <AddRentalForm onClose={onClose} onSubmit={onSubmit} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AddRentalDialog;

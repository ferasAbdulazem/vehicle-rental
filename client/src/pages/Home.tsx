import React, { useMemo, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Page from '../components/Page';
import useRentals from '../lib/data/rentals/useRentals';
import formatDate from '../lib/utils/formateDate';
import AddRentalDialog from '../components/AddRentalDialog';

const columns: GridColDef[] = [
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'vehicle', headerName: 'Vehicle', width: 200 },
  { field: 'rentalStartAt', headerName: 'Started At', width: 200 },
  { field: 'plannedRentalEndAt', headerName: 'Planned Return', width: 200 },
];
const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { rentals } = useRentals();

  const rows = useMemo<GridRowsProp>(
    () => {
      if (!rentals) {
        return [];
      }
      return rentals.map((rental) => ({
        id: rental.id,
        rentalStartAt: formatDate(rental.rentalStartAt),
        plannedRentalEndAt: formatDate(rental.plannedRentalEndAt),
        customer: rental.customer.name,
        vehicle: rental.vehicle.title,
      }));
    },

    [rentals],
  );

  return (
    <>
      <Page>
        <Box display="flex" justifyContent="flex-end" marginBottom={1.5}>
          <Fab onClick={() => setDialogOpen(true)} color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
        <div style={{ height: '350px', width: '100%' }}>

          <DataGrid rows={rows} columns={columns} />
        </div>
      </Page>
      <AddRentalDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
};
export default Home;

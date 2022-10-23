import React, { useMemo } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Page from '../components/Page';
import useRentals from '../lib/data/rentals/useRentals';
import formatDate from '../lib/utils/formateDate';

const columns: GridColDef[] = [
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'vehicle', headerName: 'Vehicle', width: 200 },
  { field: 'rentalStartAt', headerName: 'Started At', width: 200 },
  { field: 'plannedRentalEndAt', headerName: 'Planned Return', width: 200 },
];
const Home = () => {
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
    <Page>
      <div style={{ height: '350px', width: '100%' }}>

        <DataGrid rows={rows} columns={columns} />
      </div>
    </Page>
  );
};
export default Home;

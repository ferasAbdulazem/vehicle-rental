import { query } from '../../db';

const FETCH_ALL_VEHICLES = 'SELECT * FROM Vehicles';

export default async function fetchAllVehicles() {
  const vehicles = await query({ sql: FETCH_ALL_VEHICLES });

  return vehicles;
}

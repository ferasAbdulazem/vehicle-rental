import { IRental } from '../../../entity/rental';
import { query } from '../../db';

const FETCH_ALL_RENTALS_QUERY = 'SELECT * FROM Customers';

export default async function fetchAllRentals() {
  return query<IRental[]>({ sql: FETCH_ALL_RENTALS_QUERY });
}

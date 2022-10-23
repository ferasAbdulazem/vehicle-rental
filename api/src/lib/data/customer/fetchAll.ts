import { ICustomer } from '../../../entity/customer';
import { query } from '../../db';

const FETCH_ALL_CUSTOMERS = 'SELECT * FROM Customers';

export default async function fetchAllCustomers() {
  return query<ICustomer[]>({ sql: FETCH_ALL_CUSTOMERS });
}

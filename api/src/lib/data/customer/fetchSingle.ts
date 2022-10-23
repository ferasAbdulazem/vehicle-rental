import { ICustomer } from '../../../entity/customer';
import { query } from '../../db';

const FETCH_SINGLE_CUSTOMER = 'SELECT * FROM Customers cu WHERE cu.id= ?';

export default async function fetchSingleCustomers(customerId: number) {
  return query<ICustomer[]>({ sql: FETCH_SINGLE_CUSTOMER }, [customerId]);
}

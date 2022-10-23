import { ICustomer } from '../../../entity/customer';
import { query } from '../../db';

export default async function upsertCustomer(customer: ICustomer) {
  const CREATE_CUSTOMER = `REPLACE INTO Customers (${Object.keys(customer).join(', ')}) VALUES (?)`;

  return query(
    { sql: CREATE_CUSTOMER },
    [
      customer.id,
      customer.name,
      customer.address,
      customer.phoneNumber,
      customer.email,
      customer.isActive,
    ],
  );
}

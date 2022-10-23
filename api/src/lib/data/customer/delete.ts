import { query } from '../../db';

const DELETE_CUSTOMER = 'DELETE FROM customers cu WHERE cu.id= ?';

export default async function deleteCustomer(customerId: number) {
  return query({ sql: DELETE_CUSTOMER }, [customerId]);
}

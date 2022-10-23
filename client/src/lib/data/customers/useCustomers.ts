import useSWR from 'swr';
import { ICustomer } from '../../types/customer';

export default function useCustomers() {
  const { data: customers, mutate: mutateCustomers } = useSWR<ICustomer[]>('/customers');

  return { customers, mutateRentals: mutateCustomers };
}

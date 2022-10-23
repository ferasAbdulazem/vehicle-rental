import useSWR from 'swr';
import { IRental } from '../../types/rental';

export default function useRentals() {
  const { data: rentals, mutate: mutateRentals } = useSWR<IRental[]>('/rentals');

  return { rentals, mutateRentals };
}

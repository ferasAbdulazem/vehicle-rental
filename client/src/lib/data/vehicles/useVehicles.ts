import useSWR from 'swr';
import { IVehicle } from '../../types/vehicle';

export default function useVehicles() {
  const { data: vehicles, mutate: mutateVehicles } = useSWR<IVehicle[]>('/vehicles');

  return { vehicles, mutateRentals: mutateVehicles };
}

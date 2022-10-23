import { IRental } from '../../../entity/rental';
import { query } from '../../db';

const FETCH_ALL_RENTALS_QUERY = `
SELECT * FROM Rentals rental 
INNER JOIN Vehicles vehicle ON rental.vehicleID = vehicle.id 
INNER JOIN Customers customer  ON rental.customerID = customer.id
`;

interface IRentalQueryResponse {
  rental: {
    comment?: string;
    customerID: number;
    id: number;
    kilometrage?: number;
    plannedRentalEndAt: string;
    rentalStartAt: string;
    returnedAT?: string;
    vehicleID: number;
  };
  vehicle: {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    isActive: boolean;
    model: string;
    modelYear: number;
    numberPlate: string;
    title: string;
  },
  customer: {
    address: string;
    createdAt: string;
    email: string;
    id: number;
    isActive: boolean;
    name: string;
    phoneNumber: string;
  }
}

export default async function fetchAllRentals() {
  const rentalRes = await query<IRentalQueryResponse[]>(
    { sql: FETCH_ALL_RENTALS_QUERY, nestTables: true },
  );

  const mappedRentals: IRental[] = rentalRes.map(({ rental, vehicle, customer }) => ({
    comment: rental.comment ?? '',
    id: rental.id,
    kilometrage: rental.kilometrage ?? 0,
    plannedRentalEndAt: rental.plannedRentalEndAt,
    rentalStartAt: rental.rentalStartAt,
    returnedAT: rental.returnedAT,
    vehicle,
    customer,
  }));

  return mappedRentals;
}

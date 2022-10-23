import { query } from '../../db';

export interface ICreateRentalInput {
  vehicleID: number;
  customerID: number;
  rentalStartAt: Date;
  plannedRentalEndAt: Date;
  comment?: string;
}

const INSERT_RENTAL_QUERY = 'INSERT INTO Rentals(vehicleID, customerId, rentalStartAt, plannedRentalEndAt, comment) VALUES (?)';

export default async function createRental(rentalData: ICreateRentalInput) {
  query({ sql: INSERT_RENTAL_QUERY }, [
    [
      rentalData.vehicleID,
      rentalData.customerID,
      rentalData.rentalStartAt,
      rentalData.plannedRentalEndAt,
      rentalData.comment,
    ],
  ]);
}

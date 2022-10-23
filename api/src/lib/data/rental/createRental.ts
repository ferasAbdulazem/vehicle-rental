import { query } from '../../db';

export interface ICreateRentalInput {
  carId: number;
  customerId: number;
  rentalStartAt: Date;
  plannedRentalEndAt: Date;
  comment: string;
}

const INSERT_RENTAL_QUERY = 'INSERT INTO Rental(carId, customerId, rentalStartAt, plannedRentalEndAt, comment) VALUES (?)';

export default async function createRental(rentalData: ICreateRentalInput) {
  query({ sql: INSERT_RENTAL_QUERY }, [
    [
      rentalData.carId,
      rentalData.customerId,
      rentalData.rentalStartAt,
      rentalData.plannedRentalEndAt,
      rentalData.comment,
    ],
  ]);
}

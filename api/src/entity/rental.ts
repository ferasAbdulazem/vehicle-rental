import { ICustomer } from './customer';
import { IVehicle } from './vehicle';

export interface IRental {
  id: number;
  customer: ICustomer;
  vehicle: IVehicle;
  comment: string;
  rentalStartAt: Date;
  rentalEndAt: Date;
}

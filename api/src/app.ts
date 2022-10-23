import bodyParser from 'body-parser';
import express from 'express';
import customerController from './controller/customer.controller';
import rentalController from './controller/rental.controller';
import vehicleController from './controller/vehicle.controller';

const app = express();

app.use(bodyParser.json());

/**
 * controllers
 */
app.use('/rentals', rentalController);
app.use('/customers', customerController);
app.use('/vehicles', vehicleController);

export default app;

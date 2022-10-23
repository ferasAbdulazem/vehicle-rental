import bodyParser from 'body-parser';
import express from 'express';
import customerController from './controller/customer.controller';
import rentalController from './controller/rental.controller';

const app = express();

app.use(bodyParser.json());

/**
 * controllers
 */
app.use('/rentals', rentalController);
app.use('/customers', customerController);

export default app;

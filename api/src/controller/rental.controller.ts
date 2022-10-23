import express from 'express';
import { getLogger } from 'log4js';
import createRental, { ICreateRentalInput } from '../lib/data/rental/createRental';
import fetchAllRentals from '../lib/data/rental/fetchAll';

const logger = getLogger('Controller:Rental');

const rentalController = express.Router();

rentalController.get('/', async (_, res) => {
  logger.info('/rentals');

  return res.json(await fetchAllRentals());
});

rentalController.post('/create', async (req, res) => {
  const rentalData: ICreateRentalInput = req.body;
  // TODO better type check
  if (!rentalData) {
    return res.status(404).json('error: bad rental data ');
  }

  await createRental(rentalData);

  return res.json(true);
});

export default rentalController;

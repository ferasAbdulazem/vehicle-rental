import { getLogger } from 'log4js';
import express from 'express';
import fetchAllVehicles from '../lib/data/vehicle/fetchAll';

const logger = getLogger('Controller:Vehicle');

const vehicleController = express.Router();

vehicleController.get('/', async (_, res) => {
  logger.info('/vehicle');

  const vehicles = await fetchAllVehicles();

  return res.json(vehicles);
});

export default vehicleController;

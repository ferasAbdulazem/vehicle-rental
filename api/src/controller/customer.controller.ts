import { getLogger } from 'log4js';
import express from 'express';
import fetchAllCustomers from '../lib/data/customer/fetchAll';
import fetchSingleCustomers from '../lib/data/customer/fetchSingle';
import { ICustomer } from '../entity/customer';
import upsertCustomer from '../lib/data/customer/upsert';
import deleteCustomer from '../lib/data/customer/delete';

const logger = getLogger('Controller:Cars');

const customerController = express.Router();

customerController.get('/', async (_, res) => {
  logger.info('/customers');

  const customers = await fetchAllCustomers();

  return res.json(customers);
});

customerController.get('/:customerId', async (req, res) => {
  logger.info('/customers/:customerId');

  const customerId = parseInt(req.params.customerId, 10);

  const customer = await fetchSingleCustomers(customerId);

  return res.json(customer);
});

customerController.post('/upsert', async (req, res) => {
  logger.info('/customers/upsert');

  if (!req.body) {
    return res.status(404).json('error: no customer was provided');
  }

  const { customer }: {customer: ICustomer} = req.body;

  await upsertCustomer(customer);

  return res.json(true);
});

customerController.post('/edit/:customerId', () => {
  logger.info('/customers/edit/:customerId');
});

customerController.post('/delete/:customerId', async (req, res) => {
  logger.info('/customers/delete/:customerId');

  const customerId = parseInt(req.params.customerId, 10);

  await deleteCustomer(customerId);

  return res.json(true);
});

export default customerController;

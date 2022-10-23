import dotenv from 'dotenv';
import { getLogger } from 'log4js';
import app from './app';
import './logging';

dotenv.config();
const logger = getLogger('Server:Index');

const port = process.env.PORT || 4000;

app.use('/ping', (_, res) => res.send('pong'));

app.listen(port, () => {
  logger.info(`app is running on port${port}`);
});

import { TEMP_UPLOAD_DIR } from './constants/contacts.js';
import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';
import { createDirIfNotExist } from './utils/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExist(TEMP_UPLOAD_DIR);
  setupServer();
};

bootstrap();

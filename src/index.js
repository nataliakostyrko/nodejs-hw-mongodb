import { TEMP_UPLOAD_PATH, UPLOAD_PATH } from './constants/index.js';
import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';
import {createDirIfNotExist } from './utils/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoConnection();
   await createDirIfNotExist(TEMP_UPLOAD_PATH);
  await createDirIfNotExist(UPLOAD_PATH);
  setupServer();
};

bootstrap();

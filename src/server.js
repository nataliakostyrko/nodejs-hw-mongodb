import express from 'express';
import pino from 'pino-http';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import env from './utils/env.js';
import { PORT_ENV_VAR } from './constants/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import router from './routers/index.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';
import { UPLOAD_PATH } from './constants/index.js';

const setupServer = () => {
  const app = express();

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
    }),
  );

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(cors());
  app.use(cookieParser());

  app.use(router);
  app.use('/uploads', express.static(UPLOAD_PATH));
  app.use('/api-docs', swaggerDocs());

  app.use('*', notFoundHandler);

  app.use(errorHandler);

const PORT = Number(env(PORT_ENV_VAR, '3000'));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

  });
};

export default setupServer;

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './/utils/env.js';
import contactsRouter from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

import cookieParser from 'cookie-parser';


const PORT = Number(env('PORT', '3000'));


export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(cookieParser());

  app.use(contactsRouter);

  app.use('*', notFoundHandler);


  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

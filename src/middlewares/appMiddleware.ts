/**
 * @fileoverview Middleware configuration for the Express application.
 * @version 1.0.0
 * @module appMiddleware
 */

import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

/**
 * Configure middlewares for the Express application.
 * @param {Application} app - The Express application instance.
 */
export const configureMiddlewares = (app: Application): void => {
  app.set('trust proxy', 1);
  app.use(helmet());
  app.use(
    cors({
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      credentials: true,
    })
  );
  app.use(compression());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Logger (only in development environment)
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview Server setup and configuration.
 * @version 1.0.0
 * @since 2023-10-27
 * @module server
 */
import dotenv from 'dotenv';
import http from 'http';
import ip from 'ip';
import os from 'os';
import { systemLogger } from '../utils';
import { dbInstance } from '../libs';
import { Application } from 'express';

dotenv.config();

const PORT: string | number = process.env.PORT ?? 3001;

/**
 * Initialize and start the server.
 * @param {any} app - The Express application instance.
 */
export const startServer = async (app: Application): Promise<void> => {
  /**
   * The HTTPS server instance.
   * @type {http.Server}
   */
  const server: http.Server = http.createServer(app);

  try {
    // Connect to the MongoDB database
    await dbInstance.connectMongo();

    // Start the HTTP server
    server.listen(PORT, () => {
      systemLogger.info({
        name: 'Evil Book',
        host: `http://${ip.address()}:${PORT}`,
        platform: os.platform(),
      });
    });
  } catch (error: any) {
    systemLogger.error('Failed To Establish Connection To Database.', {
      error_name: error.constructor.name,
      error_message: `${error}`,
      error_stack: error.stack,
    });
    process.exit(1);
  }
};

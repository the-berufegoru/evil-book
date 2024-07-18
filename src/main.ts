/**
 * @fileoverview Server setup and configuration.
 * @version 1.0.0
 * @module server
 */

import dotenv from 'dotenv';
import app from './app';
import { startServer } from './utils';

const result = dotenv.config();

if (result.error) {
  console.error('Failed to load environment variables:', result.error);
  process.exit(1);
}

startServer(app);

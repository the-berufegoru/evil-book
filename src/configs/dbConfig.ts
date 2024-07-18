/**
 * @fileoverview Configuration for database connections.
 * @version 1.0.0
 * @module databaseConfig
 */
import { IDatabaseConfig } from '../interfaces';

const { MONGO_DB_URL } = process.env;
/**
 * Multiple database configurations, one for development and one for production.
 * @type {DatabaseConfig}
 */
export const databaseConfig: IDatabaseConfig = {
  mongo: {
    url: MONGO_DB_URL as string,
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @fileoverview Database connection library.
 * @version 1.0.0
 * @module database
 */
import mongoose, { Connection } from 'mongoose';
import { databaseConfig } from '../configs';
import { systemLogger } from '../utils';

export class DatabaseLib {
  private static instance: DatabaseLib;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  /**
   * Get the singleton instance of DatabaseLib.
   * @returns {DatabaseLib} The singleton instance.
   * @public
   */
  public static getInstance(): DatabaseLib {
    if (!DatabaseLib.instance) {
      DatabaseLib.instance = new DatabaseLib();
    }
    return DatabaseLib.instance;
  }

  /**
   * Connect to MongoDB.
   * @returns {Promise<Connection>} A promise that resolves to the MongoDB connection.
   * @public
   * @async
   */
  public async connectMongo(): Promise<Connection> {
    try {
      await mongoose.connect(databaseConfig?.mongo?.url);
      return mongoose.connection;
    } catch (error: any) {
      systemLogger.error('MongoDB Connection Failed', {
        error_name: error.constructor.name,
        error_message: error.message,
        error_stack: error.stack,
      });
      throw error;
    }
  }

  /**
   * Close the MongoDB connection.
   * @returns {Promise<void>}
   * @public
   * @static
   * @async
   */
  public static async closeMongo(): Promise<void> {
    try {
      return await mongoose.connection.close();
    } catch (error: any) {
      systemLogger.error('Failed to close MongoDB connection.', {
        error_name: error.constructor.name,
        error_message: error.message,
        error_stack: error.stack,
      });
      throw error;
    }
  }
}

export const dbInstance = DatabaseLib.getInstance();

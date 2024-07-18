/**
 * @fileoverview
 * @version 1.0.0
 * @module dbInterfaces
 */

interface IMongoConfig {
  url: string;
}

export interface IDatabaseConfig {
  mongo: IMongoConfig;
}

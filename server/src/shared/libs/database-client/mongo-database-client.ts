import { setTimeout } from 'node:timers/promises';

import { inject, injectable } from 'inversify';
import * as Mongoose from 'mongoose';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { DatabaseClient } from './database-client.interface.js';

const RETRY_COUNT = 5;
const RETRY_TIMEOUT = 1000;

@injectable()
export class MongoDatabaseClient implements DatabaseClient {
  private mongoose: typeof Mongoose = null!;
  private isConnected = false;

  constructor(@inject(Component.Logger) private readonly logger: Logger) {}

  public async connect(uri: string): Promise<void> {
    if (this.isConnectedToDatabase()) {
      throw new Error('MongoDB client already connected.');
    }

    this.logger.info('Connecting to MongoDB...');
    await this.retryConnection(uri);
  }

  private async retryConnection(uri: string): Promise<void> {
    for (let attempt = 1; attempt <= RETRY_COUNT; attempt++) {
      try {
        this.mongoose = await Mongoose.connect(uri);
        this.isConnected = true;
        this.logger.info('Database connection established.');
        return;
      } catch (error) {
        const message = `Failed to connect to database. Attempt ${attempt}/${RETRY_COUNT}.`;
        this.logger.error(message, error as Error);
        if (attempt < RETRY_COUNT) await setTimeout(RETRY_TIMEOUT);
      }
    }

    throw new Error(
      `Unable to connect to database after ${RETRY_COUNT} attempts.`,
    );
  }

  public async disconnect(): Promise<void> {
    if (!this.isConnectedToDatabase()) {
      throw new Error('MongoDB client is not connected.');
    }

    this.logger.info('Disconnecting from MongoDB...');
    await this.mongoose.disconnect();
    this.isConnected = false;
    this.logger.info('Database connection closed.');
  }

  public isConnectedToDatabase(): boolean {
    return this.isConnected;
  }
}

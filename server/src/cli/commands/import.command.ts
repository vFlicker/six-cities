import { getErrorMessage } from '#src/shared/helpers/index.js';
import { getMongoURI } from '#src/shared/helpers/index.js';
import {
  DatabaseClient,
  MongoDatabaseClient,
} from '#src/shared/libs/database-client/index.js';
import { TSVFileReader } from '#src/shared/libs/file-reader/index.js';
import { ConsoleLogger, Logger } from '#src/shared/libs/logger/index.js';
import {
  DefaultOfferService,
  OfferModel,
  OfferService,
} from '#src/shared/modules/offer/index.js';
import {
  DefaultUserService,
  UserModel,
  UserService,
} from '#src/shared/modules/user/index.js';
import { Offer } from '#src/shared/types/index.js';

import { OfferFactory } from '../offer-factory.js';
import { DEFAULT_USER_PASSWORD } from './command.constant.js';
import { Command } from './command.interface.js';

export class ImportCommand implements Command {
  private logger: Logger;
  private userService: UserService;
  private offerService: OfferService;
  private databaseClient: DatabaseClient;
  private salt: string = '';

  constructor() {
    this.onImportedLine = this.onImportedLine.bind(this);
    this.onCompletedImport = this.onCompletedImport.bind(this);

    this.logger = new ConsoleLogger();
    this.userService = new DefaultUserService(this.logger, UserModel);
    this.offerService = new DefaultOfferService(this.logger, OfferModel);
    this.databaseClient = new MongoDatabaseClient(this.logger);
  }

  public getName(): string {
    return '--import';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [_, username, password, host, dbPort, dbName, salt] = parameters;
    const uri = getMongoURI(username, password, host, dbPort, dbName);
    await this.databaseClient.connect(uri);
    this.salt = salt;

    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompletedImport);

    try {
      await fileReader.read();
    } catch (err) {
      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMessage(err));
    }
  }

  private async onImportedLine(
    line: string,
    resolve: () => void,
  ): Promise<void> {
    const tsvData = TSVFileReader.toArray(line);
    const offer = OfferFactory.create(tsvData);
    console.log({ offer });

    await this.saveOffer(offer);
    resolve();
  }

  private async saveOffer(offer: Offer) {
    const userDto = { ...offer.host, password: DEFAULT_USER_PASSWORD };
    const user = await this.userService.findOrCreate(userDto, this.salt);
    const offerDto = { ...offer, host: user._id };
    const hostId = user._id as never as string;
    await this.offerService.create({ ...offerDto, hostId: hostId });
  }

  private async onCompletedImport(importedRowCount: number): Promise<void> {
    console.info(`Imported ${importedRowCount} offers`);
    await this.databaseClient.disconnect();
  }
}

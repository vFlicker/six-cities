import { ObjectId } from 'mongodb';

import { getErrorMessage } from '#src/shared/helpers/index.js';
import { getMongoURI } from '#src/shared/helpers/index.js';
import {
  TSVData,
  TSVDataGenerator,
} from '#src/shared/libs/data-generator/index.js';
import {
  DatabaseClient,
  MongoDatabaseClient,
} from '#src/shared/libs/database-client/index.js';
import { TSVFileReader } from '#src/shared/libs/file-reader/index.js';
import { ConsoleLogger, Logger } from '#src/shared/libs/logger/index.js';
import {
  CityModel,
  CityService,
  DefaultCityService,
} from '#src/shared/modules/city/index.js';
import {
  CreateOfferDto,
  DefaultOfferService,
  OfferModel,
  OfferService,
} from '#src/shared/modules/offer/index.js';
import {
  CreateUserDto,
  DefaultUserService,
  UserModel,
  UserService,
} from '#src/shared/modules/user/index.js';

import { DEFAULT_USER_PASSWORD } from './command.constant.js';
import { Command } from './command.interface.js';

type ImportParameters = {
  filename: string;
  username: string;
  password: string;
  host: string;
  dbPort: string;
  dbName: string;
  salt: string;
};

export class ImportCommand implements Command {
  private logger: Logger;
  private userService: UserService;
  private cityService: CityService;
  private offerService: OfferService;
  private databaseClient: DatabaseClient;
  private salt: string = '';

  constructor() {
    this.logger = new ConsoleLogger();
    this.userService = new DefaultUserService(this.logger, UserModel);
    this.cityService = new DefaultCityService(this.logger, CityModel);
    this.offerService = new DefaultOfferService(this.logger, OfferModel);
    this.databaseClient = new MongoDatabaseClient(this.logger);

    this.onImportedLine = this.onImportedLine.bind(this);
    this.onCompletedImport = this.onCompletedImport.bind(this);
  }

  public getName(): string {
    return '--import';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const importParams = this.parseParameters(parameters);
    const uri = this.buildMongoURI(importParams);

    await this.databaseClient.connect(uri);

    const { filename, salt } = importParams;
    const fileReader = new TSVFileReader(filename.trim());
    this.salt = salt;

    this.registerFileReaderEvents(fileReader);
    this.importData(fileReader);
  }

  private parseParameters(parameters: string[]): ImportParameters {
    const [filename, username, password, host, dbPort, dbName, salt] =
      parameters;
    return { filename, username, password, host, dbPort, dbName, salt };
  }

  private buildMongoURI({
    username,
    password,
    host,
    dbPort,
    dbName,
  }: ImportParameters): string {
    return getMongoURI(username, password, host, dbPort, dbName);
  }

  private registerFileReaderEvents(fileReader: TSVFileReader): void {
    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompletedImport);
  }

  private async importData(fileReader: TSVFileReader): Promise<void> {
    try {
      await fileReader.read();
    } catch (err: unknown) {
      const error = err as Error;
      const fileName = fileReader.filename;
      this.logger.error(`Can't import data from file: ${fileName}`, error);
      this.logger.error(getErrorMessage(error), error);
    }
  }

  private async onImportedLine(
    line: string,
    resolve: () => void,
  ): Promise<void> {
    const tsvData = TSVDataGenerator.parse(line);
    await this.saveData(tsvData);
    resolve();
  }

  private async saveData(tsvData: TSVData): Promise<void> {
    const userDto = this.buildUserDto(tsvData);
    const user = await this.userService.findOrCreate(userDto, this.salt);

    // TODO: add city to the database
    console.log({ cityService: this.cityService });

    const offerDto = this.buildOfferDto(tsvData, user.id);
    await this.offerService.create(
      new ObjectId('60f1b6b9e6f3f3b3b8b3b3b3'),
      offerDto,
    );
  }

  private buildUserDto(tsvData: TSVData): CreateUserDto {
    return {
      avatarUrl: tsvData.hostAvatarUrl,
      email: tsvData.hostEmail,
      name: tsvData.hostName,
      type: tsvData.hostType,
      password: DEFAULT_USER_PASSWORD,
    };
  }

  private buildOfferDto(tsvData: TSVData, hostId: string): CreateOfferDto {
    return {
      title: tsvData.title,
      description: tsvData.description,
      cityName: tsvData.cityName,
      previewImage: tsvData.previewImage,
      offerImages: tsvData.offerImages,
      isPremium: tsvData.isPremium,
      isFavorite: tsvData.isFavorite,
      rating: tsvData.rating,
      propertyType: tsvData.propertyType,
      roomsCount: tsvData.roomsCount,
      guestsCount: tsvData.guestsCount,
      rentalPrice: tsvData.rentalPrice,
      amenities: tsvData.amenities,
      hostId,
      location: {
        latitude: tsvData.locationLatitude,
        longitude: tsvData.locationLongitude,
      },
    };
  }

  private async onCompletedImport(importedRowCount: number): Promise<void> {
    console.info(`Imported ${importedRowCount} rows`);
    await this.databaseClient.disconnect();
  }
}

import { getErrorMessage } from '#src/shared/helpers/index.js';
import { getMongoURI } from '#src/shared/helpers/index.js';
import {
  ParsedTSVData,
  TSVDataGenerator,
} from '#src/shared/libs/data-generator/index.js';
import {
  DatabaseClient,
  MongoDatabaseClient,
} from '#src/shared/libs/database-client/index.js';
import { TSVFileReader } from '#src/shared/libs/file-reader/index.js';
import { ConsoleLogger, Logger } from '#src/shared/libs/logger/index.js';
import { CreateCityDto } from '#src/shared/modules/city/index.js';
import {
  CityModel,
  CityService,
  DefaultCityService,
} from '#src/shared/modules/city/index.js';
import {
  CommentModel,
  CommentService,
  CreateCommentDto,
  DefaultCommentService,
} from '#src/shared/modules/comment/index.js';
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
  private commentService: CommentService;
  private databaseClient: DatabaseClient;
  private salt: string = '';

  constructor() {
    this.logger = new ConsoleLogger();
    this.userService = new DefaultUserService(this.logger, UserModel);
    this.cityService = new DefaultCityService(this.logger, CityModel);
    this.offerService = new DefaultOfferService(this.logger, OfferModel);
    this.commentService = new DefaultCommentService(this.logger, CommentModel);
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
    const parsedTSVData = TSVDataGenerator.parse(line);
    await this.saveData(parsedTSVData);
    resolve();
  }

  private async saveData(parsedTSVData: ParsedTSVData): Promise<void> {
    const userDto = this.buildUserDto(parsedTSVData);
    const user = await this.userService.findOrCreate(userDto, this.salt);

    const cityDto = this.buildCityDto(parsedTSVData);
    const city = await this.cityService.findOrCreate(cityDto);

    const offerDto = this.buildOfferDto(parsedTSVData, user.id);
    const offer = await this.offerService.create(city.id, offerDto);

    const commentDtos = this.buildCommentDtos(parsedTSVData, user.id, offer.id);
    const pendingComments = commentDtos.map((commentDto) => {
      return this.commentService.create(commentDto);
    });
    await Promise.all(pendingComments);
  }

  private buildUserDto(parsedTSVData: ParsedTSVData): CreateUserDto {
    return {
      username: parsedTSVData.hostUsername,
      email: parsedTSVData.hostEmail,
      password: DEFAULT_USER_PASSWORD,
      passwordConfirmation: DEFAULT_USER_PASSWORD,
    };
  }

  private buildCityDto(parsedTSVData: ParsedTSVData): CreateCityDto {
    return {
      name: parsedTSVData.cityName,
      location: {
        coordinates: [parsedTSVData.cityLatitude, parsedTSVData.cityLongitude],
      },
    };
  }

  private buildOfferDto(
    parsedTSVData: ParsedTSVData,
    hostId: string,
  ): CreateOfferDto {
    return {
      title: parsedTSVData.title,
      description: parsedTSVData.description,
      cityName: parsedTSVData.cityName,
      previewImage: parsedTSVData.previewImage,
      offerImages: parsedTSVData.offerImages,
      isPremium: parsedTSVData.isPremium,
      isFavorite: parsedTSVData.isFavorite,
      rating: parsedTSVData.offerRating,
      propertyType: parsedTSVData.propertyType,
      roomsCount: parsedTSVData.roomsCount,
      guestsCount: parsedTSVData.guestsCount,
      rentalPrice: parsedTSVData.rentalPrice,
      amenities: parsedTSVData.amenities,
      hostId,
      location: {
        coordinates: [
          parsedTSVData.offerLatitude,
          parsedTSVData.offerLongitude,
        ],
      },
    };
  }

  buildCommentDtos(
    parsedTSVData: ParsedTSVData,
    authorId: string,
    offerId: string,
  ): CreateCommentDto[] {
    const commentDtos: CreateCommentDto[] = [];

    for (let i = 0; i < parsedTSVData.comments.length - 1; i++) {
      const text = parsedTSVData.comments[i];
      const rating = parsedTSVData.commentRatings[i];

      const commentDto: CreateCommentDto = { text, rating, authorId, offerId };
      commentDtos.push(commentDto);
    }

    return commentDtos;
  }

  private async onCompletedImport(importedRowCount: number): Promise<void> {
    console.info(`Imported ${importedRowCount} rows`);
    await this.databaseClient.disconnect();
  }
}

import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { CityDocument, CityModelType } from './city.entity.js';
import { CityService } from './city-service.interface.js';
import { CreateCityDto } from './dto/create-city-dto.js';

@injectable()
export class DefaultCityService implements CityService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.CityModel) private readonly cityModel: CityModelType,
  ) {}

  public async create(dto: CreateCityDto): Promise<CityDocument> {
    const createdCity = await this.cityModel.create(dto);
    this.logger.info(`City with name ${dto.name} was created`);
    return createdCity;
  }

  public async findByName(name: string): Promise<CityDocument | null> {
    return this.cityModel
      .findOne({ name: { $regex: name, $options: 'i' } })
      .exec();
  }

  public async findAll(): Promise<CityDocument[]> {
    return this.cityModel.find().exec();
  }
}

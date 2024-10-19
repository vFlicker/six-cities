import { CityEntity } from './city.entity.js';
import { CreateCityDto } from './dto/create-city-dto.js';

export interface CityService {
  create(dto: CreateCityDto): Promise<CityEntity>;
  findAll(): Promise<CityEntity[]>;
}

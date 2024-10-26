import { CityDocument } from './city.entity.js';
import { CreateCityDto } from './dto/create-city-dto.js';

export interface CityService {
  create(dto: CreateCityDto): Promise<CityDocument>;
  findByName(name: string): Promise<CityDocument | null>;
  findAll(): Promise<CityDocument[]>;
}

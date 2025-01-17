import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferDocument } from './offer.entity.js';

export interface OfferService {
  create(cityId: string, dto: CreateOfferDto): Promise<OfferDocument>;
  findById(id: string): Promise<OfferDocument | null>;
  findNearbyById(id: string): Promise<OfferDocument[]>;
  findAll(): Promise<OfferDocument[]>;
  findAllByCityId(id: string, count?: number): Promise<OfferDocument[]>;
}

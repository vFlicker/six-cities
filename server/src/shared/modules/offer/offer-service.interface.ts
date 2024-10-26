import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferDocument } from './offer.entity.js';

export interface OfferService {
  create(cityId: string, dto: CreateOfferDto): Promise<OfferDocument>;
  findById(id: string): Promise<OfferDocument | null>;
  findAll(): Promise<OfferDocument[]>;
  findAllByCityId(id: string): Promise<OfferDocument[]>;
}

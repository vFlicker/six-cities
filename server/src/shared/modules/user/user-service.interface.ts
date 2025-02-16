import { CreateUserDto } from './dto/create-user.dto.js';
import { UserDocument } from './user.entity.js';

export interface UserService {
  create(dto: CreateUserDto, salt: string): Promise<UserDocument>;
  findById(id: string): Promise<UserDocument | null>;
  findByEmail(email: string): Promise<UserDocument | null>;
  findOrCreate(dto: CreateUserDto, salt: string): Promise<UserDocument>;
}

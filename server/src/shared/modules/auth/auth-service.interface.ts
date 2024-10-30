import { LoginUserDto, UserDocument } from '#src/shared/modules/user/index.js';

export interface AuthService {
  verify(dto: LoginUserDto): Promise<UserDocument>;
  authenticate(user: UserDocument): Promise<string>;
}

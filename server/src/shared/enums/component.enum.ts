export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserModel: Symbol.for('UserModel'),
  UserService: Symbol.for('UserService'),
  UserController: Symbol.for('UserController'),
  AuthService: Symbol.for('AuthService'),
  AuthExceptionFilter: Symbol.for('AuthExceptionFilter'),
  CityModel: Symbol.for('CityModel'),
  CityService: Symbol.for('CityService'),
  CityController: Symbol.for('CityController'),
  OfferModel: Symbol.for('OfferModel'),
  OfferService: Symbol.for('OfferService'),
  OfferController: Symbol.for('OfferController'),
  ApiDocService: Symbol.for('ApiDocService'),
  ApiDocController: Symbol.for('ApiDocController'),
} as const;

type CamelToSnakeCase<S extends string> = (
  S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
    : S
);

type CamelToSnakeCaseNested<T> = {
  [K in keyof T as CamelToSnakeCase<Extract<K, string>>]: T[K]
};

type TAuthData = {
  email: string,
  password: string,
};

type TCity = {
  location: TLocation,
  name: string,
};

type THost = {
  id: number,
  avatarUrl?: string,
  isPro?: boolean,
  name: string,
};

type TLocation = {
  latitude: number,
  longitude: number,
  zoom: number,
};

type TOffer = {
  id: number,
  bedrooms: number,
  city: TCity,
  description: string,
  goods: string[],
  host: THost,
  images: string[],
  isFavorite?: boolean,
  isPremium?: boolean,
  location: TLocation,
  maxAdults?: number,
  previewImage?: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

type TOfferServer = Omit<CamelToSnakeCaseNested<TOffer>, 'host'> & {
  host: CamelToSnakeCaseNested<THost>,
};

type TReview = {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: TUser,
};

type TUser = {
  avatarUrl?: string,
  email: string,
  id: number,
  isPro?: boolean,
  name: string,
};

type TUserServer = CamelToSnakeCaseNested<TUser>;

export type {
  TAuthData,
  TOffer,
  TOfferServer,
  TReview,
  TUser,
  TUserServer
};

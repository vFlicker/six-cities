// TODO: move this object to SERVICES or STORE, because it use only with thunks
export const getApiRoute = {
  comments: (): string => '/comments',
  favorite: (): string => '/favorite',
  offer: (id: number): string => `/hotels/${id}`,
  offers: (): string => '/hotels',
  offersNearby: (id: number): string => `/hotels/${id}/nearby`,
  login: (): string => '/login',
  logout: (): string => '/logout',
};

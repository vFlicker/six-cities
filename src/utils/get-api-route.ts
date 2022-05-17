// TODO: move this object to SERVICES or STORE, because it use only with thunks
export const apiRoute = {
  getComments: (id: number): string => `/comments/${id}`,
  sendComment: (id: number): string => `/comments/${id}`,
  getFavoriteOffers: (): string => '/favorite',
  changeFavoriteOffer: (id: number, status: 0 | 1): string => `/favorite/${id}/${status}`,
  getOffer: (id: number): string => `/hotels/${id}`,
  getOffers: (): string => '/hotels',
  getOffersNearby: (id: number): string => `/hotels/${id}/nearby`,
  login: (): string => '/login',
  logout: (): string => '/logout',
};

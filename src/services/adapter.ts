import { TOffer, TOfferServer } from '../types/offer';
import { TUser, TUserServer } from '../types/user';

export const Adapter = {
  transformOffer: (offer: TOfferServer): TOffer => {
    const adaptOffer = {
      ...offer,
      previewImage: offer.preview_image,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      host: {
        ...offer.host,
        isPro: offer.host.is_pro,
        avatarUrl: offer.host.avatar_url,
      },
    };

    delete adaptOffer.preview_image;
    delete adaptOffer.is_favorite;
    delete adaptOffer.is_premium;
    delete adaptOffer.max_adults;
    delete adaptOffer.host.is_pro;
    delete adaptOffer.host.avatar_url;

    return adaptOffer;
  },
  transformUser: (user: TUserServer): TUser => {
    const adaptUser = {
      ...user,
      avatarUrl: user.avatar_url,
      isPro: user.is_pro,
    };

    delete adaptUser.avatar_url;
    delete adaptUser.is_pro;

    return adaptUser;
  },
};

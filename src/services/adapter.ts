import {
  Offer,
  OfferServer,
  User,
  UserServer,
} from '@/types';

export const Adapter = {
  offerFormServerToClient: (offer: OfferServer): Offer => {
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

  userFormServerToClient: (user: UserServer): User => {
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

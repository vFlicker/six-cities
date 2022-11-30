import { OfferID } from '~/types';

export const addToInProgress = (
  favoriteIDs: OfferID[],
  favoriteID: OfferID,
): OfferID[] => {
  const updatedFavoriteIDs = [...favoriteIDs, favoriteID];
  return updatedFavoriteIDs;
};

export const removeFromInProgress = (
  favoriteIDs: OfferID[],
  favoriteID: OfferID,
): OfferID[] => {
  return favoriteIDs.filter((id) => favoriteID === id);
};

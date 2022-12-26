import { OfferID } from '~/types';

export const addIdToInIdsProgress = (
  ids: OfferID[],
  id: OfferID,
): OfferID[] => {
  return [...ids, id];
};

export const removeIdFromInIdsProgress = (
  ids: OfferID[],
  id: OfferID,
): OfferID[] => {
  return ids.filter((currentId) => currentId !== id);
};

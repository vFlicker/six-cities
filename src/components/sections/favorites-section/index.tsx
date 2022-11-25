import { useAppSelector } from '~/hooks';
import { offersSlice } from '~/store';

import { CardItem, LocationItem, Spinner } from '../../shared';
import { ErrorSection } from '../error-section';
import { FavoritesEmptySection } from '../favorites-empty-section';

import * as S from './styles';

export function FavoritesSection(): JSX.Element {
  const favoritesByCity = useAppSelector(offersSlice.selectFavoritesByCity);
  const isLoading = useAppSelector(offersSlice.selectLoadingStatus);
  const error = useAppSelector(offersSlice.selectError);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorSection />;

  if (!favoritesByCity) return <FavoritesEmptySection />;

  return (
    <S.Section>
      <S.Container>
        <S.Title>Saved listing</S.Title>
        <S.List>
          {Object.entries(favoritesByCity).map(([cityName, offers]) => (
            <S.Item key={cityName}>
              <S.LocationWrapper>
                <LocationItem isActive cityName={cityName} />
              </S.LocationWrapper>

              <S.CardList>
                {offers.map((offer) => (
                  <CardItem key={offer.id} offer={offer} cardType="small" />
                ))}
              </S.CardList>
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Section>
  );
}

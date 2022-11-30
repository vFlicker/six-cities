import { useAppSelector } from '~/hooks';
import { offersSlice } from '~/store';

import { CardItem, ErrorMessage, Location, Spinner } from '../../shared';
import { FavoritesEmptySection } from './favorites-empty-section';

import * as S from './styles';

export function FavoritesSection(): JSX.Element {
  const favoritesByCity = useAppSelector(offersSlice.selectFavoritesByCity);
  const isLoading = useAppSelector(offersSlice.selectIsLoading);
  const error = useAppSelector(offersSlice.selectError);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  if (!favoritesByCity) return <FavoritesEmptySection />;

  return (
    <S.Section>
      <S.Container>
        <S.Title>Saved listing</S.Title>
        <S.List>
          {Object.entries(favoritesByCity).map(([cityName, offers]) => (
            <S.Item key={cityName}>
              <S.LocationWrapper>
                <Location isActive cityName={cityName} />
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

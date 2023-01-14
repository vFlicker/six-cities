import { useAppSelector } from '~/hooks/use-app-selector';
import * as offersSlice from '~/store/slices/offers/slice';

import { CardItem } from '../../shared/card-item/card-item';
import { ErrorMessage } from '../../shared/error-message/error-message';
import { Location } from '../../shared/location/location';
import { Spinner } from '../../shared/spinner/spinner';
import { FavoritesEmptySection } from './favorites-empty-section/favorites-empty-section';

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

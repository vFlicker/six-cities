import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '~/hooks/use-app-dispatch';
import { useAppSelector } from '~/hooks/use-app-selector';
import { offersSlice } from '~/store';

import { CardItem } from '../../shared/card-item/card-item';
import { Container } from '../../shared/container';
import { ErrorMessage } from '../../shared/error-message/error-message';
import { Map } from '../../shared/map/map';
import { Spinner } from '../../shared/spinner/spinner';

import * as S from './styles';

export function NearPlacesSection(): JSX.Element | null {
  const { id } = useParams();

  const offersNearby = useAppSelector(offersSlice.selectNearby);
  const isLoading = useAppSelector(offersSlice.selectIsLoading);
  const error = useAppSelector(offersSlice.selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offersSlice.fetchOffersNearby(Number(id)));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  if (!offersNearby.length) return null;

  return (
    <>
      <Map offers={offersNearby} orientation="vertical" />

      <Container>
        <S.Section>
          <S.Title>Other places in the neighborhood</S.Title>
          <S.CardList>
            {offersNearby.map((offer) => (
              <CardItem key={offer.id} offer={offer} cardType="big" />
            ))}
          </S.CardList>
        </S.Section>
      </Container>
    </>
  );
}

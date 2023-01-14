import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '~/hooks/use-app-dispatch';
import { useAppSelector } from '~/hooks/use-app-selector';
import * as offerSlice from '~/store/slices/offer/slice';

import { HeaderSection } from '../../sections/header-section/header-section';
import { NearPlacesSection } from '../../sections/near-places-section/near-places-section';
import { NotFoundSection } from '../../sections/not-found-section/not-found-section';
import { PropertySection } from '../../sections/property-section/property-section';
import { ErrorMessage } from '../../shared/error-message/error-message';
import { Page } from '../../shared/page';
import { Spinner } from '../../shared/spinner/spinner';

import * as S from './styles';

export function OfferPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />
      <OfferContent />
    </Page>
  );
}

function OfferContent(): JSX.Element {
  const { id } = useParams();

  const offer = useAppSelector(offerSlice.selectOffer);
  const isLoading = useAppSelector(offerSlice.selectIsLoading);
  const error = useAppSelector(offerSlice.selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offerSlice.fetchOffer(Number(id)));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  if (!offer) return <NotFoundSection />;

  return (
    <S.PageContent>
      <PropertySection {...offer} />
      <NearPlacesSection />
    </S.PageContent>
  );
}

import { savedIconSrc } from '~/assets/images';

import { NotFound } from '../../../shared/not-found/not-found';
import { NotificationSection } from '../../../shared/notification-section';

import * as S from './styles';

export function FavoritesEmptySection(): JSX.Element {
  return (
    <NotificationSection>
      <S.Title>Favorites (empty)</S.Title>
      <S.Container>
        <NotFound
          iconSrc={savedIconSrc}
          alt="Save icon"
          title="Nothing yet saved"
          description="Save properties to narrow down search or plan your future trips."
        />
      </S.Container>
    </NotificationSection>
  );
}

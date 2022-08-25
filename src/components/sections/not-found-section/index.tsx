import { noResultsIconSrc } from '~/assets/images';

import { NotFound, NotificationSection } from '../../shared';

import * as S from './styles';

export function NotFoundSection(): JSX.Element {
  return (
    <NotificationSection>
      <S.Title>Favorites (empty)</S.Title>
      <S.Container>
        <NotFound
          iconSrc={noResultsIconSrc}
          title="Page not found"
          description="The page you are looking for does not exist"
        />
      </S.Container>
    </NotificationSection>
  );
}

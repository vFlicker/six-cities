import { noResultsIconSrc } from '~/assets/images';

import { NotFound, NotificationSection } from '../../shared';

import * as S from './styles';

export function NotFoundSection(): JSX.Element {
  return (
    <NotificationSection>
      <S.Container>
        <NotFound
          iconSrc={noResultsIconSrc}
          alt="No results icon"
          title="Page not found"
          description="The page you are looking for does not exist"
        />
      </S.Container>
    </NotificationSection>
  );
}

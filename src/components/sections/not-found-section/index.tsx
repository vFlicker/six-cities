import { noResultsIconSrc } from '~/assets/images';

import { SectionWithBorder, NotFound } from '../../shared';

import * as S from './styles';

export function NotFoundSection(): JSX.Element {
  return (
    <SectionWithBorder>
      <S.Title>Favorites (empty)</S.Title>
      <S.Container>
        <NotFound
          iconSrc={noResultsIconSrc}
          title="Page not found"
          description="The page you are looking for does not exist"
        />
      </S.Container>
    </SectionWithBorder>
  );
}

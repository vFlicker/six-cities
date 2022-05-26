import { noResultsIconSrc } from '@/assets/images';
import { SectionWithBorder, NotFound } from '@/components/shared';

import * as S from './styles';

export function NotFoundSection(): JSX.Element {
  return (
    <SectionWithBorder>
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <S.NotFoundContainer>
        <NotFound
          iconSrc={noResultsIconSrc}
          title="Page not found"
          description="The page you are looking for does not exist"
        />
      </S.NotFoundContainer>
    </SectionWithBorder>
  );
}

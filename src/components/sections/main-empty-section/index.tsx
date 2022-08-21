import { noResultsIconSrc } from '~/assets/images';

import { NotFound } from '../../shared';

import * as S from './styles';

export function MainEmptySection(): JSX.Element {
  return (
    <S.Container>
      <S.LeftSection>
        <NotFound
          iconSrc={noResultsIconSrc}
          title="No places to stay available"
          description="We could not find any property available at the moment in Dusseldorf"
        />
      </S.LeftSection>
      <S.RightSection />
    </S.Container>
  );
}

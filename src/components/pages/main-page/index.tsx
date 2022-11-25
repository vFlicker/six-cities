import { HeaderSection, FilterSection, MainSection } from '../../sections';

import * as S from './styles';

export function MainPage(): JSX.Element {
  return (
    <S.Page>
      <HeaderSection />

      <S.PageContent>
        <S.Title>Cities</S.Title>

        <FilterSection />

        <S.Wrapper>
          <MainSection />
        </S.Wrapper>
      </S.PageContent>
    </S.Page>
  );
}

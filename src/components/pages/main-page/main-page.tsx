import { HeaderSection } from '../../sections/header-section/header-section';
import { FilterSection } from '../../sections/filter-section/filter-section';
import { MainSection } from '../../sections/main-section/main-section';

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

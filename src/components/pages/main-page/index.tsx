import {
  HeaderSection,
  LocationListSection,
  MainSection,
} from '../../sections';

import * as S from './styles';

export function MainPage(): JSX.Element {
  return (
    <S.Page>
      <HeaderSection />

      <S.PageContent>
        <S.Title>Cities</S.Title>

        <LocationListSection />

        <S.Wrapper>
          <MainSection />
        </S.Wrapper>
      </S.PageContent>
    </S.Page>
  );
}

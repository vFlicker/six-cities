import { HeaderSection, FooterSection, FavoritesSection } from '../../sections';
import { Page } from '../../shared';

import * as S from './styles';

export function FavoritesPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />

      <S.PageContent>
        <FavoritesSection />
      </S.PageContent>

      <FooterSection />
    </Page>
  );
}

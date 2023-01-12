import { HeaderSection } from '../../sections/header-section/header-section';
import { FooterSection } from '../../sections/footer-section/footer-section';
import { FavoritesSection } from '../../sections/favorites-section/favorites-section';
import { Page } from '../../shared/page';

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

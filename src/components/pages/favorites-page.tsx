import { HeaderSection, FooterSection, SectionFavorites } from '../sections';
import { Page } from '../shared';

export function FavoritesPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />
      <main className="page__main page__main--favorites">
        <SectionFavorites />
      </main>
      <FooterSection />
    </Page>
  );
}

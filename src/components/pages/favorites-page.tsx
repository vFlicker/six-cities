import { HeaderSection, FooterSection, FavoritesSection } from '../sections';
import { Page } from '../shared';

export function FavoritesPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />
      <main className="page__main page__main--favorites">
        <FavoritesSection />
      </main>
      <FooterSection />
    </Page>
  );
}

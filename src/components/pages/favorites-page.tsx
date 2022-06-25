import { SectionHeader, FooterSection, SectionFavorites } from '../sections';

export function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <SectionHeader />
      <main className="page__main page__main--favorites">
        <SectionFavorites />
      </main>
      <FooterSection />
    </div>
  );
}

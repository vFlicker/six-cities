import { HeaderSection, FooterSection, SectionFavorites } from '../sections';

export function FavoritesPage(): JSX.Element {
  return (
    <div className="page">
      <HeaderSection />
      <main className="page__main page__main--favorites">
        <SectionFavorites />
      </main>
      <FooterSection />
    </div>
  );
}

import { SectionHeader, FooterSection, NotFoundSection } from '../sections';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page  page--not-found">
      <SectionHeader />
      <main className="page__main page__main--not-found">
        <NotFoundSection />
      </main>
      <FooterSection />
    </div>
  );
}

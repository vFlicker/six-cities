import { SectionHeader, FooterSection, ErrorSection } from '../sections';

export function ErrorPage(): JSX.Element {
  return (
    <div className="page">
      <SectionHeader />
      <main className="page__main page__main--not-found">
        <ErrorSection />
      </main>
      <FooterSection />
    </div>
  );
}

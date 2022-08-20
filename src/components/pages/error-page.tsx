import { HeaderSection, FooterSection, ErrorSection } from '../sections';

export function ErrorPage(): JSX.Element {
  return (
    <div className="page">
      <HeaderSection />
      <main className="page__main page__main--not-found">
        <ErrorSection />
      </main>
      <FooterSection />
    </div>
  );
}

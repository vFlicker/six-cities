import { HeaderSection, FooterSection, NotFoundSection } from '../sections';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page  page--not-found">
      <HeaderSection />
      <main className="page__main">
        <NotFoundSection />
      </main>
      <FooterSection />
    </div>
  );
}

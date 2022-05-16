import { SectionHeader, SectionFooter, SectionError } from '../sections';

export function ErrorPage(): JSX.Element {
  return (
    <div className="page">
      <SectionHeader />
      <main className="page__main page__main--not-found">
        <div className="page__not-found-container container">
          <SectionError />
        </div>
      </main>
      <SectionFooter />
    </div>
  );
}

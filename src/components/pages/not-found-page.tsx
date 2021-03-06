import { SectionHeader, SectionFooter, SectionNotFound } from '../sections';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page  page--not-found">
      <SectionHeader />
      <main className="page__main page__main--not-found">
        <div className="page__not-found-container container">
          <SectionNotFound />
        </div>
      </main>
      <SectionFooter />
    </div>
  );
}

import { HeaderSection, FooterSection, ErrorSection } from '../sections';
import { Page } from '../shared';

export function ErrorPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />
      <main className="page__main page__main--not-found">
        <ErrorSection />
      </main>
      <FooterSection />
    </Page>
  );
}

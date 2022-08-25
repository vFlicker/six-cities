import { HeaderSection, FooterSection, ErrorSection } from '../../sections';
import { Page, PageContent } from '../../shared';

export function ErrorPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />

      <PageContent>
        <ErrorSection />
      </PageContent>

      <FooterSection />
    </Page>
  );
}

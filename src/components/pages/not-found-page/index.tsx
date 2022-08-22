import { HeaderSection, FooterSection, NotFoundSection } from '../../sections';
import { Page, PageContent } from '../../shared';

export function NotFoundPage(): JSX.Element {
  return (
    <Page>
      <HeaderSection />

      <PageContent>
        <NotFoundSection />
      </PageContent>

      <FooterSection />
    </Page>
  );
}

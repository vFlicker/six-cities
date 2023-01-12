import { HeaderSection } from '../../sections/header-section/header-section';
import { FooterSection } from '../../sections/footer-section/footer-section';
import { NotFoundSection } from '../../sections/not-found-section/not-found-section';
import { Page } from '../../shared/page';
import { PageContent } from '../../shared/page-content';

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

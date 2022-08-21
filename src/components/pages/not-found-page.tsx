import { HeaderSection, FooterSection, NotFoundSection } from '../sections';
import { PageContent } from '../shared';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page  page--not-found">
      <HeaderSection />
      <PageContent>
        <NotFoundSection />
      </PageContent>
      <FooterSection />
    </div>
  );
}

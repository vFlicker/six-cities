import {
  HeaderSection,
  FooterSection,
  ErrorSection,
  ErrorSectionProps,
} from '../../sections';
import { Page, PageContent } from '../../shared';

type ErrorPageProps = ErrorSectionProps;

export function ErrorPage({ errorMessage }: ErrorPageProps): JSX.Element {
  return (
    <Page>
      <HeaderSection />

      <PageContent>
        <ErrorSection errorMessage={errorMessage} />
      </PageContent>

      <FooterSection />
    </Page>
  );
}

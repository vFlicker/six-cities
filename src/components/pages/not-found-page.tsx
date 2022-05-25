import { SectionHeader, FooterSection, SectionNotFound } from '../sections';
import { FlexContainer } from '../shared';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page  page--not-found">
      <SectionHeader />
      <main className="page__main page__main--not-found">
        <FlexContainer>
          <SectionNotFound />
        </FlexContainer>
      </main>
      <FooterSection />
    </div>
  );
}

import { SectionHeader, FooterSection, SectionError } from '../sections';
import { FlexContainer } from '../shared';

export function ErrorPage(): JSX.Element {
  return (
    <div className="page">
      <SectionHeader />
      <main className="page__main page__main--not-found">
        <FlexContainer>
          <SectionError />
        </FlexContainer>
      </main>
      <FooterSection />
    </div>
  );
}

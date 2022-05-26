import { SectionHeader, MainSection } from '../sections';

export function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <SectionHeader />
      <MainSection />
    </div>
  );
}

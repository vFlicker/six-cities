import { HeaderSection, MainSection } from '../sections';

export function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderSection />
      <MainSection />
    </div>
  );
}

import { SectionHeader, SectionMain } from '../sections';

export function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <SectionHeader />
      <SectionMain />
    </div>
  );
}

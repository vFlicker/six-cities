import { noResultsIconSrc } from '~/assets/images';

import { NotFound } from '../../shared';
import { SectionLocations } from '../index';
import * as S from './styles';

export function MainEmptySection(): JSX.Element {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <SectionLocations />
      </div>
      <div className="cities">
        <S.MainEmptyContainer>
          <S.LeftSection>
            <NotFound
              iconSrc={noResultsIconSrc}
              title="No places to stay available"
              description="We could not find any property available at the moment in Dusseldorf"
            />
          </S.LeftSection>
          <S.RightSection />
        </S.MainEmptyContainer>
      </div>
    </main>
  );
}

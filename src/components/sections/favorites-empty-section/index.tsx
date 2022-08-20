import { savedIconSrc } from '~/assets/images';

import { NotFound, SectionWithBorder } from '../../shared';

import * as S from './styles';

export function FavoritesEmptySection(): JSX.Element {
  return (
    <SectionWithBorder>
      <S.Title>Favorites (empty)</S.Title>
      <S.Container>
        <NotFound
          iconSrc={savedIconSrc}
          title="Nothing yet saved"
          description="Save properties to narrow down search or plan your future trips."
        />
      </S.Container>
    </SectionWithBorder>
  );
}

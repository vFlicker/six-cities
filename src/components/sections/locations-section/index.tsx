import { Container } from '../../shared';

import { LocationsList } from './location-list';
import * as S from './styles';

export function SectionLocations(): JSX.Element {
  return (
    <S.Section>
      <Container>
        <LocationsList />
      </Container>
    </S.Section>
  );
}

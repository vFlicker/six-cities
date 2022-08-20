import { Container } from '../../shared';
import { LocationList } from './location-list';

import * as S from './styles';

export function LocationListSection(): JSX.Element {
  return (
    <S.Section>
      <Container>
        <LocationList />
      </Container>
    </S.Section>
  );
}

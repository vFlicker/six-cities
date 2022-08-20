import { Container, SectionWithBorder } from '../../shared';

import * as S from './style';

// TODO: Add error from API answer here
export function ErrorSection(): JSX.Element {
  return (
    <SectionWithBorder>
      <Container>
        <S.Title>There are problems, please try again later.</S.Title>
      </Container>
    </SectionWithBorder>
  );
}

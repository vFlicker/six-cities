import { Container, NotificationSection } from '../../shared';

import * as S from './style';

// TODO: Add error from API answer here
export function ErrorSection(): JSX.Element {
  return (
    <NotificationSection>
      <Container>
        <S.Title>There are problems, please try again later.</S.Title>
      </Container>
    </NotificationSection>
  );
}

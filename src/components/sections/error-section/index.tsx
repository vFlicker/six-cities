import { Container, NotificationSection } from '../../shared';

import * as S from './styles';

export type ErrorSectionProps = {
  errorMessage?: string;
};

export function ErrorSection({ errorMessage }: ErrorSectionProps): JSX.Element {
  const error = errorMessage ?? 'There are problems, please try again later.';
  return (
    <NotificationSection>
      <Container>
        <S.Title>{error}</S.Title>
      </Container>
    </NotificationSection>
  );
}

import { Container } from '../../shared';
import * as S from './styles';

// TODO: Add error from API answer here
export function ErrorSection(): JSX.Element {
  return (
    <S.Section>
      <Container>
        <h1 className="error__title">There are problems, please try again later.</h1>
      </Container>
    </S.Section>
  );
}

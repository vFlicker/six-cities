import * as S from './styles';

type WhatIsInsideProps = {
  goods: string[];
};

export function WhatIsInside({ goods }: WhatIsInsideProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>What&apos;s inside</S.Title>
      <S.List>
        {goods.map((item) => (
          <S.Item key={item}>{item}</S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
}

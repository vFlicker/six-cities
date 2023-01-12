import * as S from './styles';

type PriceProps = {
  price: number;
};

export function Price({ price }: PriceProps): JSX.Element {
  return (
    <S.Price>
      <S.Value>
        &euro;
        {price}
      </S.Value>
      <S.Text>&nbsp;night</S.Text>
    </S.Price>
  );
}

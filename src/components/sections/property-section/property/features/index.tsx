import * as S from './styles';

type FeaturesProps = {
  type: string;
  bedroomCount: number;
  maxAdultsCount?: number;
};

export function Features({
  type,
  bedroomCount,
  maxAdultsCount,
}: FeaturesProps): JSX.Element {
  return (
    <S.List className="property__features">
      <S.Item type="entire">{type}</S.Item>
      <S.Item type="bedrooms">{bedroomCount} Bedrooms</S.Item>
      <S.Item type="adults">Max {maxAdultsCount} adults</S.Item>
    </S.List>
  );
}

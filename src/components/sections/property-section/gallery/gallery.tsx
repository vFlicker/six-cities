import { Container } from '../../../shared/container';

import * as S from './styles';

type GalleryProps = {
  images: string[];
};

export function Gallery({ images }: GalleryProps): JSX.Element {
  return (
    <Container>
      <S.Gallery>
        {images.slice(0, 6).map((src) => (
          <S.ImageWrapper key={src}>
            <S.Image src={src} alt="Studio" />
          </S.ImageWrapper>
        ))}
      </S.Gallery>
    </Container>
  );
}

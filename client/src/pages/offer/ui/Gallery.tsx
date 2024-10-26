import styled from '@emotion/styled';

import { triangleImage } from '~/shared/assets/images';
import { Container } from '~/shared/ui/Container';

type GalleryProps = {
  imageUrls: string[];
  className?: string;
};

function Gallery({ className, imageUrls }: GalleryProps): JSX.Element {
  const first6ImageUrls = imageUrls.slice(0, 6);

  return (
    <Container className={className}>
      <StyledGallery>
        {first6ImageUrls.map((imageUrl) => (
          <StyledImageWrapper key={imageUrl}>
            <StyledImage src={imageUrl} alt="Studio" />
          </StyledImageWrapper>
        ))}
      </StyledGallery>
    </Container>
  );
}

export { Gallery };

const StyledGallery = styled.div`
  position: relative;
  display: flex;
  gap: 2px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 785px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  max-height: 452px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
    background-image: url(${triangleImage});
    background-repeat: no-repeat;
    background-size: 34px 452px;
    transform: rotate(180deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 34px;
    height: 100%;
    background-image: url(${triangleImage});
    background-repeat: no-repeat;
    background-size: 34px 452px;
  }
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 200px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  flex-grow: 1;
`;

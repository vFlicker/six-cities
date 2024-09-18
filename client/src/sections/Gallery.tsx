import styled from '@emotion/styled';

import { Container } from '~/helpers/Container';
import apartmentImage1 from '~/images/gallery/1.jpg';
import apartmentImage2 from '~/images/gallery/2.jpg';
import apartmentImage3 from '~/images/gallery/3.jpg';
import apartmentImage4 from '~/images/gallery/4.jpg';
import apartmentImage5 from '~/images/gallery/5.jpg';
import apartmentImage6 from '~/images/gallery/6.jpg';
import triangleImage from '~/images/triangle.svg';

type GalleryProps = {
  className?: string;
};

const images = [
  apartmentImage1,
  apartmentImage2,
  apartmentImage3,
  apartmentImage4,
  apartmentImage5,
  apartmentImage6,
];

function Gallery({ className }: GalleryProps): JSX.Element {
  return (
    <Container className={className}>
      <StyledGallery>
        {images.map((image) => (
          <StyledImageWrapper key={image}>
            <StyledImage src={image} alt="Studio" />
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

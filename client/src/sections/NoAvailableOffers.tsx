import styled from '@emotion/styled';

import { ResultMessage } from '~/components/ResultsMessage';
import { ContainerMixin } from '~/helpers/Container';
import { withAttrs } from '~/helpers/withAttrs';
import { backgroundNoPlacesImage, noResultsImage } from '~/shared/assets/images';
import { Color } from '~/tokens/colors';

type NoAvailableOffersProps = {
  className?: string;
};

function NoAvailableOffers({ className }: NoAvailableOffersProps): JSX.Element {
  return (
    <StyledSection className={className}>
      <StyledWrapper>
        <NoResultsMessage />
      </StyledWrapper>
      <StyledBackground />
    </StyledSection>
  );
}

export { NoAvailableOffers };

const StyledSection = styled.section`
  ${ContainerMixin}
  display: flex;
  flex-grow: 1;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  padding-top: 28.4vh;

  &::after {
    content: '';
    position: absolute;
    right: -63px;
    bottom: 0;
    width: 12.06vh;
    height: 100%;
    border-right: 6px solid ${Color.BLUE_20};
    background-color: ${Color.WHITE};
    transform: skew(-6.5deg);
  }
`;

const NoResultsMessage = withAttrs(
  {
    title: 'No places to stay available.',
    message:
      'We could not find any property available at the moment in Dusseldorf.',
    image: noResultsImage,
  },
  ResultMessage,
);

const StyledBackground = styled.div`
  display: flex;
  flex-grow: 1;
  width: 50%;

  background-image: url(${backgroundNoPlacesImage});
  background-size: auto 119%;
  background-repeat: no-repeat;
  background-position: right 100%;
`;

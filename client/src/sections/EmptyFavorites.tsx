import styled from '@emotion/styled';

import { ResultMessage } from '~/components/ResultsMessage';
import { withAttrs } from '~/helpers/withAttrs';
import { saveImage } from '~/shared/assets/images';

type EmptyFavoritesProps = {
  className?: string;
};

function EmptyFavorites({ className }: EmptyFavoritesProps): JSX.Element {
  return (
    <StyledSection className={className}>
      <EmptyFavoritesMessage />
    </StyledSection>
  );
}

export { EmptyFavorites };

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`;

const EmptyFavoritesMessage = withAttrs(
  {
    title: 'Nothing yet saved.',
    message: 'Save properties to narrow down search or plan your future trips.',
    image: saveImage,
  },
  styled(ResultMessage)`
    margin-top: 150px;
  `,
);

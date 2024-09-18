import styled from '@emotion/styled';
import { Children, PropsWithChildren } from 'react';

type FavoriteListProps = PropsWithChildren<{
  className?: string;
}>;

function FavoriteList({ children, ...props }: FavoriteListProps): JSX.Element {
  return (
    <StyledFavoriteList {...props}>
      {Children.map(children, (child) => (
        <StyledFavoriteItems>{child}</StyledFavoriteItems>
      ))}
    </StyledFavoriteList>
  );
}

export { FavoriteList };

const StyledFavoriteList = styled.ul`
  display: grid;
  gap: 52px;
`;

const StyledFavoriteItems = styled.li``;

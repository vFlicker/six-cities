import styled from '@emotion/styled';
import { Children, PropsWithChildren } from 'react';

type CardListProps = PropsWithChildren<{
  col: number;
  className?: string;
}>;

function CardList({ children, ...props }: CardListProps): JSX.Element {
  return (
    <StyledCardList {...props}>
      {Children.map(children, (child) => (
        <StyledCardsItem>{child}</StyledCardsItem>
      ))}
    </StyledCardList>
  );
}

export { CardList };

const StyledCardList = styled.ul<Pick<CardListProps, 'col'>>`
  display: grid;
  gap: 16px;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
`;

const StyledCardsItem = styled.li`
  display: grid;
`;

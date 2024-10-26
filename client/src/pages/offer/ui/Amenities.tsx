import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

import { Section } from './Section';

type AmenitiesProps = {
  items: string[];
  className?: string;
};

function Amenities({ className, items }: AmenitiesProps): JSX.Element {
  return (
    <Section title="What's inside" className={className}>
      <StyledList>
        {items.map((amenity) => (
          <StyledItem key={amenity}>{amenity}</StyledItem>
        ))}
      </StyledList>
    </Section>
  );
}

export { Amenities };

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledItem = styled.li`
  position: relative;
  width: 100%;
  max-width: 174px;
  padding-left: 18px;
  font-size: 16px;
  line-height: 1.75;
  color: ${Color.BLACK};

  &:before {
    content: '';
    position: absolute;
    top: 14px;
    left: 0;
    width: 12px;
    height: 1px;
    background-color: ${Color.BLACK};
  }
`;

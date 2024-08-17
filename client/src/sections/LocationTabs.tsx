import styled from '@emotion/styled';

import { SlantedLink } from '~/elements/SlantedButton';
import { Container } from '~/helpers/Container';

const TABS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function LocationTabs(): JSX.Element {
  return (
    <StyledContainer>
      <StyledList>
        {TABS.map((tab) => (
          <StyledItem key={tab}>
            <SlantedLink active={tab === 'Amsterdam'} to="/">
              {tab}
            </SlantedLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

export { LocationTabs };

const StyledContainer = styled(Container)`
  padding-bottom: 32px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 36px;
`;

const StyledItem = styled.li`
  display: flex;
`;

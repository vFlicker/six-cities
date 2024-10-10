import styled from '@emotion/styled';

import { Container } from '~/shared/ui/Container';
import { Color } from '~/shared/theme/colors';
import { SlantedLink } from '~/shared/ui/SlantedButton';

type LocationTabsProps = {
  className?: string;
};

const TABS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function LocationTabs({ className }: LocationTabsProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledContainer className={className}>
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
    </StyledWrapper>
  );
}

export { LocationTabs };

const StyledWrapper = styled.div`
  background-color: ${Color.GRAY_10};
`;

const StyledContainer = styled(Container)`
  padding: 16px 42px 50px;
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

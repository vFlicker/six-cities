import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';

import { useCities } from '~/entities/cities';
import { Color } from '~/shared/theme/colors';
import { Container } from '~/shared/ui/Container';
import { SlantedLink } from '~/shared/ui/SlantedButton';

type CityFilterProps = {
  className?: string;
};

function CityFilter({ className }: CityFilterProps): JSX.Element | null {
  const [searchParams] = useSearchParams();
  const activeCityName = searchParams.get('cityName');

  const { cities, isCitiesPending } = useCities();
  if (isCitiesPending || !cities) return null;

  return (
    <StyledWrapper>
      <StyledContainer className={className}>
        <StyledList>
          {cities.map(({ name }) => (
            <StyledItem key={name}>
              <SlantedLink
                active={name === activeCityName}
                to={`?cityName=${name}`}
              >
                {name}
              </SlantedLink>
            </StyledItem>
          ))}
        </StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
}

export { CityFilter };

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

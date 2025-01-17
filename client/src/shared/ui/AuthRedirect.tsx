import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

import { TextLink } from './TextButton';

type AuthRedirectProps = {
  to: string;
  text: string;
  label: string;
};

function AuthRedirect({ label, to, text }: AuthRedirectProps): JSX.Element {
  return (
    <StyledText>
      {text}{' '}
      <StyledLink to={to} aria-label={label}>
        {label}
      </StyledLink>
    </StyledText>
  );
}

export { AuthRedirect };

const StyledText = styled.p`
  font-size: 14px;
  line-height: 1.2143;
`;

const StyledLink = styled(TextLink)`
  color: ${Color.BLUE_20};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

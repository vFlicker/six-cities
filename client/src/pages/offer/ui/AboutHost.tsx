import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  avatarImage,
  defaultAvatarImage,
  starImage,
} from '~/shared/assets/images';
import { Color } from '~/shared/theme/colors';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Section } from './Section';

type AboutHostProps = {
  // TODO: use enum
  userType: 'regular' | 'pro';
  className?: string;
};

type StyledAvatarProps = {
  isPro: boolean;
};

function AboutHost({ className, userType }: AboutHostProps): JSX.Element {
  const isPro = userType === 'pro';

  return (
    <Section className={className} title="Meet the host">
      <StyledUser>
        <StyledAvatarWrapper isPro={isPro}>
          <StyledAvatarImage
            src={avatarImage}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </StyledAvatarWrapper>
        <StyledName>Angelina</StyledName>
        {isPro && <StyledStatus>Pro</StyledStatus>}
      </StyledUser>
      <StyledDescription>
        <StyledText>
          A quiet cozy and picturesque that hides behind a a river by the unique
          lightness of Amsterdam. The building is green and from 18th century.
        </StyledText>
        <StyledText>
          An independent House, strategically located between Rembrand Square
          and National Opera, but where the bustle of the city comes to rest in
          this alley flowery and colorful.
        </StyledText>
      </StyledDescription>
    </Section>
  );
}

export { AboutHost };

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  padding-right: 16px;
`;

const StyledAvatarWrapper = styled.div<StyledAvatarProps>`
  position: relative;
  width: 74px;
  min-width: 74px;
  height: 74px;
  margin-bottom: 7px;
  background-image: url(${defaultAvatarImage});
  background-size: 100%;
  background-repeat: no-repeat;

  ${({ isPro }) =>
    isPro &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: -3px;
        right: -16px;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        background-color: ${Color.ORANGE_10};
        background-image: url(${starImage});
        background-size: 20px 19px;
        background-position: center 6px;
        background-repeat: no-repeat;
      }
    `}
`;

const StyledAvatarImage = styled.img`
  border-radius: 50%;
`;

const StyledName = styled.span`
  font-size: 16px;
  line-height: 1.187;
  font-weight: 700;
  color: ${Color.BLACK};
`;

const StyledStatus = styled.span`
  font-size: 12px;
  line-height: 1.167;
  color: ${Color.GRAY_80};
`;

const StyledDescription = styled.div`
  display: grid;
  grid-gap: 28px;
`;

const StyledText = withAttrs(
  {
    as: 'p',
    variant: TypographyVariant.TEXT_1,
  },
  Typography,
);

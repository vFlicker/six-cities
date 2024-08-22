import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Color } from '~/tokens/colors';
import { IconName } from '~/tokens/icons';

type IconProps = PropsWithChildren<{
  className?: string;
  name: IconName;
  size?: IconSize;
}>;

const enum IconSize {
  ExtraSmall = 'extra-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

function Icon(props: IconProps) {
  const xlinkHref = `#${props.name}`;

  return (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" {...props}>
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

export { Icon, IconSize };

const IconNameToIconSize = {
  [IconName.Arrow]: IconSize.ExtraSmall,
  [IconName.Bookmark]: IconSize.Medium,
  [IconName.Star]: IconSize.Large,
  [IconName.User]: IconSize.Medium,
  [IconName.Adults]: IconSize.Small,
  [IconName.Bedrooms]: IconSize.Small,
  [IconName.Place]: IconSize.Small,
};

const IconNameToCSS = {
  [IconName.Arrow]: css`
    fill: ${Color.GRAY_90};
  `,
  [IconName.Bookmark]: css`
    fill: transparent;
    stroke: ${Color.GRAY_50};
  `,
  [IconName.Star]: css`
    fill: ${Color.GRAY_40};
  `,
  [IconName.User]: css`
    fill: ${Color.GRAY_50};
  `,
  [IconName.Adults]: css`
    fill: ${Color.GRAY_50};
  `,
  [IconName.Bedrooms]: css``,
  [IconName.Place]: css`
    fill: ${Color.GRAY_50};
    stroke: ${Color.GRAY_50};
  `,
};

const IconSizeToCSS = {
  [IconSize.ExtraSmall]: css`
    width: 8px;
    height: 8px;
  `,
  [IconSize.Small]: css`
    width: 14px;
    height: 14px;
  `,
  [IconSize.Medium]: css`
    width: 20px;
    height: 20px;
  `,
  [IconSize.Large]: css`
    width: 34px;
    height: 34px;
  `,
};

const StyledIcon = styled.svg<IconProps>(({ name, size }) => {
  const defaultIconSize = size || IconNameToIconSize[name];

  return css`
    ${IconSizeToCSS[defaultIconSize]};
    ${IconNameToCSS[name]};
  `;
});

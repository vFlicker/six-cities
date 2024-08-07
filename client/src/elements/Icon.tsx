import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Color } from '~/tokens/colors';
import { IconName } from '~/tokens/icons';

type IconProps = PropsWithChildren<{
  name: IconName;
  size?: IconSize;
}>;

const enum IconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const IconNameToIconSize = {
  [IconName.ARROW_SELECT]: IconSize.SMALL,
  [IconName.BOOKMARK]: IconSize.MEDIUM,
  [IconName.STAR]: IconSize.LARGE,
  [IconName.USER]: IconSize.MEDIUM,
};

const IconNameToCSS = {
  [IconName.ARROW_SELECT]: css`
    fill: ${Color.GRAY_90};
  `,
  [IconName.BOOKMARK]: css`
    fill: transparent;
    stroke: ${Color.GRAY_50};
  `,
  [IconName.STAR]: css`
    fill: ${Color.GRAY_40};
  `,
  [IconName.USER]: css`
    fill: ${Color.GRAY_50};
  `,
};

const IconSizeToCSS = {
  [IconSize.SMALL]: css`
    width: 8px;
    height: 8px;
  `,
  [IconSize.MEDIUM]: css`
    width: 20px;
    height: 20px;
  `,
  [IconSize.LARGE]: css`
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

function Icon(props: IconProps) {
  const xlinkHref = `#${props.name}`;

  return (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" {...props}>
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

export { Icon, IconSize };

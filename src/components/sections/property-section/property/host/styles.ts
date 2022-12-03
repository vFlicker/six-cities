import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { avatarIconSrc, starWhiteIconSrc } from '~/assets/images';

type AvatarWrapperProps = {
  isPro?: boolean;
};

export const Wrapper = styled.div``;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 24px;
  line-height: 1.1667;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
  color: #000;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  padding-right: 16px;
`;

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  width: 74px;
  min-width: 74px;
  height: 74px;
  margin-bottom: 7px;

  background-image: url(${avatarIconSrc});
  background-size: 100%;
  background-repeat: no-repeat;

  &::after {
    ${({ isPro }) => {
      if (isPro) {
        return css`
          content: '';
          position: absolute;
          top: -3px;
          right: -16px;
          width: 33px;
          height: 33px;
          border-radius: 50%;
          background-color: #ff9000;
          background-image: url(${starWhiteIconSrc});
          background-size: 20px 19px;
          background-position: center 6px;
          background-repeat: no-repeat;
        `;
      }

      return css``;
    }}
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.span`
  font-size: 16px;
  line-height: 1.187;
  font-weight: 700;
  color: #000;
`;

export const Status = styled.span`
  font-size: 12px;
  line-height: 1.167;
  color: #696969;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 52px;
  font-size: 16px;
  line-height: 1.75;
  color: #000;
`;

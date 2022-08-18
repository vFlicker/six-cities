import styled from '@emotion/styled';

import { visuallyHidden } from '@/components/shared';
import { avatarIconSrc, starsActiveIconSrc, starsIconSrc } from '@/assets/images';

export const List = styled.ul`
  width: 100%;
  margin-bottom: 55px;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 22px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54px;
  margin-right: 22px;
`;

export const AvatarWrapper = styled.div`
  min-width: 54px;
  width: 54px;
  height: 54px;
  margin-bottom: 10px;

  background-image: url(${avatarIconSrc});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.span`
  font-size: 14px;
  line-height: 1.2143;
  color: #000;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Info = styled.div``;

export const StarsWrapper = styled.div`
  margin-bottom: 7px;
`;

export const Stars = styled.div`
  position: relative;
  display: block;
  width: 98px;
  height: 16px;
  font-size: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 98px;
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${starsIconSrc});
    background-size: 98px 16px;
  }
`;

export const StarsItem = styled.span<{width: number}>`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: ${({ width }) => `${width}%`};
  height: 100%;
  overflow: hidden;

   &::before {
    content: "";
    display: inline-block;
    width: 98px;
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${starsActiveIconSrc});
    background-size: 98px 16px;
  }
`;

export const StarsText = styled.span`
  ${visuallyHidden}
`;

export const Comment = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.75;
  color: #000;
`;

export const Time = styled.time`
  font-size: 14px;
  line-height: 1;
  color: #5d5d5d;
`;

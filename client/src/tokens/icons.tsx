import styled from '@emotion/styled';

const enum IconName {
  ARROW = 'icon-arrow',
  BOOKMARK = 'icon-bookmark',
  STAR = 'icon-star',
  USER = 'icon-user',
}

const StyledSpriteWithIcons = styled.svg`
  display: none;
`;

function SpriteWithIcons() {
  return (
    <StyledSpriteWithIcons xmlns="http://www.w3.org/2000/svg">
      <symbol id="icon-arrow" viewBox="0 0 7 4">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
        ></path>
      </symbol>
      <symbol id="icon-bookmark" viewBox="0 0 17 18">
        <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
      </symbol>
      <symbol id="icon-star" viewBox="0 0 13 12">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
        ></path>
      </symbol>
      <symbol id="icon-user" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
        />
      </symbol>
    </StyledSpriteWithIcons>
  );
}

export { IconName, SpriteWithIcons };

type GetButtonSizeReturnType = { width: number; height: number };

export type Size = 'large' | 'small';

const LARGE_SIZE = { width: 31, height: 33 };
const SMALL_SIZE = { width: 18, height: 19 };

export const getButtonSize = (size: Size): GetButtonSizeReturnType => {
  switch (size) {
    case 'large':
      return LARGE_SIZE;
    case 'small':
      return SMALL_SIZE;
    default:
      return LARGE_SIZE;
  }
};

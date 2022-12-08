import { getButtonSize } from './utils';

describe('Utils: BookmarkButton', () => {
  describe('getButtonSize', () => {
    it('should return large sizes when the argument is "large"', () => {
      expect(getButtonSize('large')).toEqual({ width: 31, height: 33 });
    });

    it('should return small sizes when the argument is "small"', () => {
      expect(getButtonSize('small')).toEqual({ width: 18, height: 19 });
    });
  });
});

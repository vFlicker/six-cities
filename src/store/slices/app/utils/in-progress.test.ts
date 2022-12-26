import { addIdToInIdsProgress, removeIdFromInIdsProgress } from './in-progress';

describe('Module: in-progress', () => {
  describe('addIdToInIdsProgress', () => {
    it('should add id to ids', () => {
      const result = addIdToInIdsProgress([1, 2, 3], 4);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe('removeIdFromInIdsProgress', () => {
    it('should remove id from ids', () => {
      const result = removeIdFromInIdsProgress([1, 2, 3, 4], 3);
      expect(result).toEqual([1, 2, 4]);
    });
  });
});

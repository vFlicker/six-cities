import { addToInProgress, removeFromInProgress } from './in-progress';

describe('Module: in-progress', () => {
  describe('addToInProgress', () => {
    it('should add id to IDs if IDs are empty', () => {
      const IDs: number[] = [];
      const id = 1;
      const updatedIDs = [id];

      expect(addToInProgress(IDs, id)).toEqual(updatedIDs);
    });

    it('should add id to IDs if there are values in IDs', () => {
      const IDs: number[] = [1, 2, 3];
      const id = 4;
      const updatedIDs = [1, 2, 3, id];

      expect(addToInProgress(IDs, id)).toEqual(updatedIDs);
    });
  });

  describe('removeFromInProgress', () => {
    it('should do nothing if id remove from empty IDs', () => {
      const IDs: number[] = [];
      const id = 1;

      expect(removeFromInProgress(IDs, id)).toEqual(IDs);
    });

    it('should remove id from IDs if there are values in IDs', () => {
      const IDs: number[] = [1, 2, 3];
      const id = 3;
      const updatedIDs = [1, 2];

      expect(removeFromInProgress(IDs, id)).toEqual(updatedIDs);
    });
  });
});

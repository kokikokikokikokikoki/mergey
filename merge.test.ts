import {merging} from './testing'


describe('merging', () => {
    it('returns a merged array of two collections', () => {
      const collection_1 = [1, 2, 3, 4, 5];
      const collection_2 = [6, 7, 8, 9, 10];
      const result = merging(collection_1, collection_2);
  
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
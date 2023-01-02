import { pickRandomItem } from './pick-random-item';

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.42);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('when called with an array list', () => {
  it('should return the second (random) item', () => {
    const array = [1, 2, 3, 4];
    const result = pickRandomItem(array);
    expect(result).toEqual(array[1]);
  });
});

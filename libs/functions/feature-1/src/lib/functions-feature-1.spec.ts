import { f1 } from './functions-feature-1';

describe('functionsFeature1', () => {
  it('should work', () => {
    expect(f1()).toEqual({message: 'feature 1 done...'});
  });
});

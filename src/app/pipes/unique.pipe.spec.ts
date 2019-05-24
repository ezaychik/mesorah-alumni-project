import { UniquePipe } from './unique.pipe';

describe('UniqueCountriesPipe', () => {
  it('create an instance', () => {
    const pipe = new UniquePipe();
    expect(pipe).toBeTruthy();
  });
});

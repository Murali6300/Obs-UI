import { FilterPipe } from './filter.pipe';

describe('FiterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});

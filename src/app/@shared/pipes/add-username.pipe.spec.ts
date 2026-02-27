import { AddUsernamePipe } from './add-username.pipe';

describe('AddUsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new AddUsernamePipe();
    expect(pipe).toBeTruthy();
  });
});

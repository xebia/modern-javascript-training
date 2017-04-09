jest.mock('../request');

import * as user from '../user';

describe('using promises', () => {
  it('works with promises that resolve', () => {
    return user.getUserName(5)
    .then(name => expect(name).toEqual('Paul'));
  });

  it('works for promises that reject', () => {
    return user.getUserName(3)
      .catch(e => expect(e).toEqual({
        error: 'User with 3 not found.',
      }));
  });
});

describe('using async / await', () => {
  it('works with success', async () => {
    const userName = await user.getUserName(4);
    expect(userName).toEqual('Mark');
  });

  it('works with errors', async () => {
    try {
      await user.getUserName(2);
    } catch (object) {
      expect(object.error).toEqual('User with 2 not found.');
    }
  });
});

jest.mock('http');

import request from '../request';
import http from 'http';

describe('the request module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a promise', () => {
    const result = request();
    // expect(result).toEqual(jasmine.any(Promise));
    expect(result.then).toEqual(jasmine.any(Function));
  });

  it('should call http.get correctly', () => {
    const result = request('unittest_url');
    expect(http.get).toHaveBeenCalled();
    expect(http.get.mock.calls[0]).toMatchSnapshot();
  });
});

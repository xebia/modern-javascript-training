module.exports = Object.assign(jest.genMockFromModule('http'), {
  get: jest.fn()
});

// It returns 404 in order to cover the tests with local data.
const axios = {
  get: jest.fn(() => Promise.resolve({ data: {}, status: 404 }))
};
module.exports = axios;

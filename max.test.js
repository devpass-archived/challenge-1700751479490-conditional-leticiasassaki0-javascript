const max = require('./max');

test('Find the larger number', () => {
  expect(max(5, 10)).toBe(10);
});

test('Equal numbers should return either one', () => {
  expect(max(7, 7)).toBe(7);
});
const example = require('./example');

test('Prints a simple table', () => {
  expect(example(['first', 'second', 'third'], [[1, 2, 3], [4, 5, 6]])).toBe(
`| first | second | third |
| 1 | 2 | 3 |
| 4 | 5 | 6 |`
  );
});

test('Capitalize headers', () => {
  expect(example(['first', 'second', 'third'], [[1, 2, 3], [4, 5, 6]], true)).toBe(
`| First | Second | Third |
| 1 | 2 | 3 |
| 4 | 5 | 6 |`
  );
});

test('Mis-matched length throws error', () => {
  expect(() => example(['first', 'second', 'third'], [[1, 2, 3], [4, 6]], true)).toThrow(Error);
});

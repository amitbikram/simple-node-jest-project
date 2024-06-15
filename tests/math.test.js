// tests/math.test.js

import { mdast2hastGridTablesHandler, TYPE_TABLE } from '@adobe/mdast-util-gridtables';
import { add, subtract } from '../src/math';


test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});

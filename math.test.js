// see documentaion at
// https://jestjs.io/docs/getting-started

import { add, subtract, multiply, divide } from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(subtract(2, 2)).toBe(0);
});

test("multiply", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide", () => {
  expect(divide(10, 2)).toBe(5);
});

// see documentaion at
// https://jestjs.io/docs/getting-started

import { analyzeArray } from "./analyzeArray";

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1,
  });
});

// see documentaion at
// https://jestjs.io/docs/getting-started

const reverseStr = require("./reverseStr");

test("reverse string", () => {
  expect(reverseStr("tada")).toBe("adat");
});

// see documentaion at
// https://jestjs.io/docs/getting-started

//import capitalize from "./capitalize";
const capitalize = require("./capitalize");

test("First Letter capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

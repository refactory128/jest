// see documentaion at
// https://jestjs.io/docs/getting-started

import { caesarCipher } from "./caesarCipher";

test("caesarCipher", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("test wrap at end of alphabet", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("test wrap at end of alphabet upper case", () => {
  expect(caesarCipher("Z", 1)).toBe("A");
});

test("punctuation", () => {
  expect(caesarCipher("abc.", 1)).toBe("bcd.");
});

test("punctuation", () => {
  expect(caesarCipher("abc", 0)).toBe("abc");
});

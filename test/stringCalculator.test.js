const stringCalculator = require("../src/stringCalculator.js");

//step 1
test("if input is empty string function should return 0", () => {
  expect(stringCalculator.add("")).toBe(0);
});

test("if input is string contains only one number function should return that number", () => {
  expect(stringCalculator.add("1")).toBe(1);
});

test("if input is string contains only one number function should return that number", () => {
  expect(stringCalculator.add("1,4")).toBe(5);
});

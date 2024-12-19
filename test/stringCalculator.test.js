const stringCalculator = require("../src/stringCalculator.js");

//step 1
test("if input is empty string, function should return 0", () => {
  expect(stringCalculator.add("")).toBe(0);
});

test("if input is string contains only one number, function should return that number", () => {
  expect(stringCalculator.add("1")).toBe(1);
});

test("if input is string contains only 2 numbers with ',' as delimiter, function should return sum of 2 numbers", () => {
  expect(stringCalculator.add("1,4")).toBe(5);
});

//step 2
test("if input is string contains only n numbers with ',' as delimiter, function should return sum of n numbers", () => {
  expect(stringCalculator.add("1,4,8")).toBe(13);
});

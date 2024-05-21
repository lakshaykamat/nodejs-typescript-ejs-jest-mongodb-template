import sum from "./sum.js";

describe("Math functions", () => {
  it("should add two numbers correctly", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
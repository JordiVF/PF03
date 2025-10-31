import { describe, it, expect } from "vitest";
import { fibonacci } from "../src/PF03.js";

describe("test PF03", () => {
  it("valida n ≤ 0", () => {
    expect(() => fibonacci(-1)).toThrowError(new RangeError("solo números enteros > 0"));
  });
  it("valida n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  })
});

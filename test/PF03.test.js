import { describe, it, expect } from "vitest";
import { fibonacci } from "../src/PF03.js";

describe("test PF03", () => {
  it("valida n ≤ 0", () => {
    expect(() => fibonacci(-1)).toThrowError(new RangeError("solo números enteros > 0"));
  });
  it("valida n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  })
  it("valida n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  it("valida secuencia para n >= 2", () => {
    expect(fibonacci(2)).toBe(1); // 1 + 0
    expect(fibonacci(3)).toBe(2); // 1 + 1
    expect(fibonacci(4)).toBe(3); // 2 + 1
    expect(fibonacci(5)).toBe(5); // 3 + 2
  });    
});

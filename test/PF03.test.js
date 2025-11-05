import { describe, it, expect } from "vitest";
import { fibonacci } from "../src/PF03.js";
import { esPinValido } from "../src/PF03.js";

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
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2); 
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
  });    
});


describe("esPinValido", () => {
  it("debe devolver false si el pin es null o undefined", () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
  });

  it("debe devolver false si el pin está vacío", () => {
    expect(esPinValido("")).toBe(false);
  });

  it("debe devolver false si la longitud no es 4 ni 6", () => {
    expect(esPinValido("123")).toBe(false);
    expect(esPinValido("12345")).toBe(false);
    expect(esPinValido("1234567")).toBe(false);
  });

  it("debe devolver false si contiene caracteres no numéricos", () => {
    expect(esPinValido("12a4")).toBe(false);
    expect(esPinValido("abcd")).toBe(false);
    expect(esPinValido("12 4")).toBe(false);
    expect(esPinValido("12-4")).toBe(false);
  });

  it("debe devolver false si todos los dígitos son iguales", () => {
    expect(esPinValido("1111")).toBe(false);
    expect(esPinValido("000000")).toBe(false);
    expect(esPinValido("7777")).toBe(false);
    expect(esPinValido("999999")).toBe(false);
  });

  it("debe devolver true para PINes válidos de 4 dígitos", () => {
    expect(esPinValido("1234")).toBe(true);
    expect(esPinValido("9876")).toBe(true);
    expect(esPinValido("1029")).toBe(true);
  });

  it("debe devolver true para PINes válidos de 6 dígitos", () => {
    expect(esPinValido("123456")).toBe(true);
    expect(esPinValido("987654")).toBe(true);
    expect(esPinValido("102938")).toBe(true);
  });

  it("debe devolver false si el tipo no es string", () => {
    expect(esPinValido(1234)).toBe(false);
    expect(esPinValido([1, 2, 3, 4])).toBe(false);
    expect(esPinValido({ pin: "1234" })).toBe(false);
  });
});

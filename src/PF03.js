function fibonacci(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("solo se permiten números enteros");
  }

  if (n < 0) {
    throw new RangeError("solo números enteros > 0");
  }

  if (n > 9999) {
    throw new RangeError("el valor máximo permitido es 9999");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

try {
  console.log(fibonacci(2));
} catch (e) {
  if (e instanceof RangeError) {
    console.log(e.message);
  }
}

export {fibonacci};
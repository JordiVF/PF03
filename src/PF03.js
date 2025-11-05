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

function esPinValido(pin) {
  if (pin === null || pin === undefined) {
    console.error("PIN no puede ser null ni undefined");
    return false;
  }

  if (typeof pin !== "string") {
    console.error("PIN debe ser una cadena de texto");
    return false;
  }

  if (pin.length === 0) {
    console.error("PIN no puede estar vacío");
    return false;
  }

  if (pin.length !== 4 && pin.length !== 6) {
    console.error("El PIN debe tener 4 o 6 dígitos");
    return false;
  }

  for (let c of pin) {
    if (c < "0" || c > "9") {
      console.error("El PIN solo puede contener números");
      return false;
    }
  }

  let iguales = true;
  for (let i = 1; i < pin.length; i++) {
    if (pin[i] !== pin[0]) {
      iguales = false;
      break;
    }
  }
  if (iguales) {
    console.error("El PIN no puede tener todos los dígitos iguales");
    return false;
  }

  return true;
}

export {fibonacci};
export {esPinValido};
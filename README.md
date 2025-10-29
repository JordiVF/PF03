# 🧪 Proyecto TDD con Node.js y GitHub Actions

## 📋 Descripción del Proyecto

Este proyecto tiene como objetivo **practicar la metodología TDD (Test Driven Development)** y el uso de **GitHub Actions** para la integración continua.  
Durante el desarrollo se implementarán **dos funciones (fibonacci y esPinValido)** siguiendo el ciclo **Red → Green → Refactor**, trabajando en equipo con **GitFlow** y **colaboración mediante GitHub**.

---

## 🎯 Objetivos

- Aplicar la metodología **TDD** en Node.js.  
- Integrar **pruebas unitarias** desde el inicio del desarrollo.  
- Configurar un flujo de trabajo colaborativo con **GitFlow**.  
- Automatizar la ejecución de tests mediante **GitHub Actions**.

---

## ⚙️ Funciones a Implementar

### 🧮 1. `fibonacci(n)`

Devuelve el valor de la secuencia de Fibonacci en la posición `n`.

#### Reglas:
- Si `n ≤ 0`, se lanzará una excepción `RangeError("solo números enteros ≥ 0")`.
- Si `n = 0`, devuelve `0`.
- Si `n = 1`, devuelve `1`.
- Si `n ≥ 2`, cumple la fórmula `f(n) = f(n-1) + f(n-2)`.

#### Ejemplos:
```js
fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(6); // 8

### 🔢 2. `esPinValido(pin)`

Verifica si un PIN cumple con las reglas típicas de un código numérico de 4 o 6 dígitos.

#### Reglas:
- No puede ser `null` ni `undefined`.
- No puede estar vacío.
- Debe tener longitud **4 o 6**.
- Solo puede contener **dígitos del 0 al 9**.
- No se permite que todos los dígitos sean iguales (por ejemplo: `1111`, `888888`, `3333`, etc.).

#### Comportamiento:
Devuelve `true` si cumple todas las reglas y `false` si no.

#### Ejemplos:
```js
esPinValido("1234");    // true
esPinValido("0000");    // false
esPinValido("12a4");    // false
esPinValido("987654");  // true
esPinValido("");        // false
esPinValido(null);      // false

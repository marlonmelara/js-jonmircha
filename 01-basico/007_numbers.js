// Curso JavaScript: 7. Números (Numbers)
// https://youtu.be/o4p6p1z2P5A

/*
 * Números (Number)
 * - El tipo primitivo Number representa enteros y flotantes (IEEE 754).
 * - Conversión: Number(), Number.parseInt(), Number.parseFloat().
 * - Evitar new Number(...) porque crea un objeto Number; usar literales/Number() en su lugar.
 * - Métodos útiles: toFixed(), toString(), Number.isNaN(), Number.isFinite().
 * - Precisión: cuidado con operaciones de punto flotante (ej. 0.1 + 0.2 !== 0.3).
 * - Para funciones matemáticas use Math (Math.round, Math.floor, Math.random, etc.).
 */

let a = 2;
let b = new Number(1); // evita usar new Number(); prefiera 1 o Number(1)
let c = 7.19;
let d = '5.6';

console.log(a, b, c, d);

// Formateo: toFixed -> retorna string con n decimales
console.log(c.toFixed(1)); // '7.2'

// Conversión/parseo
console.log(parseInt(c)); // 7
console.log(parseFloat(c)); // 7.19

// Tipos
console.log(typeof c, typeof d); // 'number', 'string'

// Operaciones con Number objeto vs primitivo
console.log(a + b); // 3  (b se convierte a primitivo automáticamente)

// Concatenación involuntaria si hay string
console.log(c + d); // '7.195.6' -> porque d es string
console.log(c + parseInt(d)); // 12.19
console.log(c + parseFloat(d)); // 12.79

// Ejemplos adicionales y comprobaciones comunes
console.log(Number('10')); // 10
console.log(Number.parseInt('10', 10)); // 10 con radix explícito
console.log(Number.isNaN(Number('abc'))); // true si no es número
console.log(Number.isFinite(Infinity)); // false

// Precisión de punto flotante
console.log(0.1 + 0.2); // 0.30000000000000004 -> tener precaución
console.log((0.1 + 0.2).toFixed(2)); // '0.30' -> si necesita formato para mostrar

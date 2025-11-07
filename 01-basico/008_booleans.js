// Curso JavaScript: 8. Booleans
// https://youtu.be/Csu9tRuuX0M

/*
 * Booleanos (Boolean)
 * - Tipo primitivo con dos valores: true / false.
 * - Útil para control de flujo, condiciones y banderas.
 * - Valores "falsy" comunes: false, 0, "", null, undefined, NaN.
 * - Todos los demás valores son "truthy" (incluyendo objetos y arrays).
 * - Evitar new Boolean(...): crea un objeto Boolean (truthy) en vez de un primitivo.
 */

let verdadero = true;
let falso = false;

// Conversión a booleano: use Boolean(...) o doble negación (!!)
// Evitar new Boolean(...) ya que crea un objeto envoltorio (truthy siempre)
let v = Boolean(true); // preferible a new Boolean(true)
let f = Boolean(false);

console.log(verdadero, falso, v);
console.log(typeof verdadero, typeof falso);

// Ejemplos de conversión y comportamiento truthy/falsy
console.log('Boolean(1):', Boolean(1)); // true
console.log('Boolean(0):', Boolean(0)); // false
console.log('Boolean(-7):', Boolean(-7)); // true
console.log('Boolean(""):', Boolean('')); // false
console.log('Boolean(" "):', Boolean(' ')); // true (string con espacio es truthy)

// Otros casos importantes
console.log('Boolean(null):', Boolean(null)); // false
console.log('Boolean(undefined):', Boolean(undefined)); // false
console.log('Boolean(NaN):', Boolean(NaN)); // false
console.log('Boolean({}):', Boolean({})); // true -> objetos son truthy
console.log('Boolean([]):', Boolean([])); // true -> arrays son truthy

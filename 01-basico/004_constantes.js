// Curso JavaScript: 4. Constantes (const)
// https://youtu.be/PIHZRj99nHU

/* Notas sobre const:
 * - const crea un enlace (binding) inmutable: no se puede reasignar la variable.
 * - No es inmutabilidad profunda: los objetos y arrays definidos con const pueden modificarse.
 * - const es block-scoped y está sujeto al Temporal Dead Zone (no accesible antes de su inicialización).
 * - No se puede declarar una const sin inicializarla.
 * - Para evitar modificaciones de objetos/arrays use Object.freeze (inmutable superficial) o patrones inmutables.
 */

let a;

const PI = 3.1416;
console.log(PI);
// PI = 3.15; A una constante no se puede cambiar valor cuando este es un valor primitivo

// const NUEVE; No se puede crear una constante sin valor

//Sucede lo contrario con una variable como el caso de const a; que posteriormente le fue asignado el string "Goku"

a = 'Goku';
console.log(a);

// A una constante se le puede cambiar valor cuando son valores compuestos
const USER = {
  firstName: 'Jon',
  age: 35,
};

const colors = ['white', 'black', 'blue'];

console.log(USER);
console.log(colors);

USER.mail = 'jon@mail.com';
colors.push('orange');
USER.age = 36;

console.log(USER);
console.log(colors);

// Ejemplo para evitar mutaciones (Object.freeze hace inmutable de forma superficial)
const CONFIG = Object.freeze({
  debug: false,
  version: '1.0.0',
});

// CONFIG.debug = true; // esto no tendrá efecto en modo estricto lanzaría error o será ignorado

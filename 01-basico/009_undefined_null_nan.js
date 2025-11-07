// Curso JavaScript: 9. undefined, null & NaN
// https://youtu.be/dux1Uv2eLfw

/*
 * undefined, null & NaN
 *
 * - undefined: indica que una variable fue declarada pero no inicializada.
 *   typeof undefined === 'undefined'
 *   Una variable no declarada (no existe) al accederla lanza ReferenceError.
 *
 * - null: valor intencional que representa "ausencia de valor".
 *   typeof null === 'object' (es un quirk histórico de JS).
 *   Use null cuando quiera indicar explícitamente que no hay valor.
 *
 * - NaN (Not a Number): resultado de operaciones numéricas inválidas.
 *   typeof NaN === 'number' (sí, es de tipo number).
 *   Para comprobar NaN use Number.isNaN(valor) (más seguro) o isNaN(valor)
 *   (isNaN coacciona el valor a número antes de evaluar).
 */

/* undefined indica que no se ha inicializado una variable
y que el valor esta ausente*/
let indefinida;
console.log('indefinida:', indefinida); // undefined
console.log('typeof indefinida:', typeof indefinida); // 'undefined'

// acceder a una variable no declarada -> ReferenceError (comentar para que el script no falle)
// console.log(noExiste); // ReferenceError: noExiste is not defined

// null: ausencia intencional de valor
let nulo = null;
console.log('nulo:', nulo); // null
console.log('typeof nulo:', typeof nulo); // 'object' (quirk histórico)

// Usar null cuando se quiere resetear o indicar "sin valor"
let usuario = { nombre: 'Jon' };
usuario = null; // indicador explícito de "sin usuario"

// NaN: resultado de operación inválida
let noEsUnNumero = 'hola' * 3.7;
console.log('noEsUnNumero:', noEsUnNumero); // NaN
console.log('typeof NaN:', typeof noEsUnNumero); // 'number'

// Comprobaciones de NaN
console.log('isNaN(noEsUnNumero):', isNaN(noEsUnNumero)); // true (coacciona según comportamiento antiguo)
console.log('Number.isNaN(noEsUnNumero):', Number.isNaN(noEsUnNumero)); // true (recomendado)

// Ejemplos adicionales
console.log('0/0 ->', 0 / 0); // NaN
console.log('parseInt("abc") ->', Number.parseInt('abc')); // NaN

// Buenas prácticas rápidas:
// - Use === undefined o typeof para detectar undefined sin lanzar errores por variables no declaradas.
// - Use null para indicar ausencia de valor de forma intencional.
// - Use Number.isNaN para detectar NaN de forma segura.

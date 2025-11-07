// Curso JavaScript: 5. Cadenas de Texto (Strings)
// https://youtu.be/s-C8OpALC6E

/*
 * Cadenas de Texto (String)
 * - Tipo primitivo para texto en JS. Use literales ('', "") o template literals (``).
 * - Evitar new String(...): crea un objeto wrapper innecesario.
 * - Métodos comunes: length, toUpperCase, toLowerCase, includes, slice, indexOf, trim, split, replace, padStart, repeat, charAt, charCodeAt.
 * - Útil para mostrar ejemplos de manipulación y búsqueda en cadenas.
 */

// Ejemplos básicos y notas
let firstName = 'Jon';
let lastName = 'Dooley';
// Evitar new String(): crea un objeto String en lugar de un primitivo
let regards = new String('Hello!');

console.log(firstName, lastName);
console.log(regards);
console.log(
  firstName.length, // 3
  lastName.length, // 6
  regards.length, // 6
  firstName.toUpperCase(), // JON
  lastName.toLowerCase(), // dudley
  regards.includes('Hello') // true
);

// Otros métodos útiles de String: breve definición y ejemplos
const texto = '  Hola Mundo, bienvenidos al curso  ';

// slice / substring: extraen una porción por índices
console.log('slice(2,9):', texto.slice(2, 9)); // 'Hola Mu'
console.log('substring(2,9):', texto.substring(2, 9)); // similar a slice

// indexOf / includes: búsqueda
console.log('indexOf("Mundo"):', texto.indexOf('Mundo')); // posición o -1
console.log('includes("bienvenidos"):', texto.includes('bienvenidos')); // true/false

// startsWith / endsWith: comprobaciones simples
console.log('startsWith("  Hola"):', texto.startsWith('  Hola'));
console.log('endsWith("curso  "):', texto.endsWith('curso  '));

// trim / trimStart / trimEnd: eliminan espacios en los extremos
console.log('trim():', `"${texto.trim()}"`);

// split: convierte en array usando separador
console.log('split(","):', texto.split(','));

// replace / replaceAll: reemplazos (replaceAll para todas las coincidencias)
console.log('replace("Mundo","Gente"):', texto.replace('Mundo', 'Gente'));
console.log('replaceAll(" ", "_"):', texto.replaceAll(' ', '_'));

// padStart / padEnd: rellenan hasta una longitud
console.log('padStart(30,"*"):', texto.trim().padStart(30, '*'));

// repeat: repite el string n veces
console.log('repeat(2):', 'ha! '.repeat(2));

// charAt / charCodeAt: carácter y código unicode en una posición
console.log('charAt(2):', texto.charAt(2));
console.log('charCodeAt(2):', texto.charCodeAt(2));

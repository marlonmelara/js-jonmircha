// Curso JavaScript: 6. Template Strings
// https://youtu.be/arOXcy7K4XQ

/*
 * Template Strings / Template Literals (backticks `)
 * - Introducidas en ES6: se escriben con backticks (`).
 * - Permiten interpolar expresiones con ${...}.
 * - Soportan strings multilínea sin concatenar.
 * - Útiles para construir HTML, mensajes formateados y evaluar expresiones inline.
 */

//Cadenas de texto (string)
let firstName = 'Jon';
let lastName = 'Dooley';

// Concatenación (forma tradicional)
let regard = 'Hi! My name is' + ' ' + firstName + ' ' + lastName;
console.log(regard);

// Interpolación de variables (Template string)
// - Uso principal: insertar variables/expresiones directamente en el string
let regard2 = `Hola mi nombre es ${firstName} ${lastName}`;
console.log(regard2);

// Interpolación de expresiones: cualquier expresión JS válida
const items = 3;
const price = 9.99;
console.log(`Total a pagar (${items} items): $${(items * price).toFixed(2)}`);

// Multilínea: evita concatenaciones y los caracteres de nueva línea explícitos
let ul =
  '<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>';
console.log(ul);

let ul2 = `
<ul>
  <li>Primavera</li>
  <li>Verano</li>
  <li>Otoño</li>
  <li>Invierno</li>
</ul>`;
console.log(ul2);

// Nota: para incluir el carácter ` dentro de una template literal se puede escapar usando \`
console.log(`Backtick escapado: \``);

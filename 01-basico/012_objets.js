// Curso JavaScript: 12. Objetos
// https://youtu.be/4xig5UPRC00

/*
  Un objeto es una colección de propiedades y métodos.
  Las propiedades son variables que pertenecen al objeto y los métodos son funciones que pertenecen al objeto.
  Los objetos se pueden crear de diferentes maneras, pero la más común es usando la sintaxis de llaves {}.
  Dentro de un objeto, las propiedades y métodos se separan por comas.
  Las propiedades se pueden acceder usando la notación de punto o la notación de corchetes.
  Las propiedades se definen como "clave: valor" y los métodos como "nombre: function() {}".
*/

/*
 * Objetos (Object)
 * - Colección de propiedades (clave: valor) y métodos (funciones).
 * - Acceso: notación de punto (obj.prop) o corchetes (obj['prop']).
 * - Métodos útiles: Object.keys, Object.values, Object.entries, Object.assign, Object.freeze.
 * - Clonado: use spread (...) o Object.assign({}, obj) para copiar (no mutar el original).
 * - Inmutabilidad superficial: Object.freeze evita cambios superficiales; para inmutabilidad profunda use librerías o técnicas ad-hoc.
 * - Evitar abusar de delete en código crítico; prefiera crear nuevos objetos sin la propiedad si necesita inmutabilidad.
 */

// Crear un objeto vacío
const b = {};
console.log(b); // {}

// Crear un objeto con prototipo Object. Casi ya no se usa.
const c = new Object();
console.log(c); // {}

/* Dentro de un objeto a las variables se les van a llamar atributos/propiedades y a las funciones se les llama métodos  */
const jon = {
  nombre: 'Jon',
  apellido: 'Dooley',
  edad: 35,
  pasatiempos: ['correr', 'leer', 'dibujar'],
  soltero: false,
  contacto: {
    // Un objeto dentro de otro objeto
    email: 'jon@mail.com',
    twitter: '@jon',
    movil: '+5612345678',
  },
  saludar: function () {
    // Esta es una función que se llama método
    console.log('Hola :)');
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Me puedes seguir en Twitter como ${this.contacto.twitter}.` // this hace referencia al objeto jon (objeto con el que se esta trabajando)
    );
  },
  // ✅ Nueva forma de definir métodos desde ES6
  decirMiEdad() {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  },
};

console.log(jon);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempos);
console.log(jon.pasatiempos[0]);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto);
console.log(jon.contacto.movil);
jon.saludar();
jon.decirMiNombre();
jon.decirMiEdad();

console.log(Object.keys(jon)); // Imprime las claves del objeto jon
console.log(Object.values(jon)); // Imprime los valores del objeto jon
console.log(jon.hasOwnProperty('nombre')); // Imprime true si el objeto jon tiene la propiedad nombre
console.log(jon.hasOwnProperty('nacimiento')); // Imprime false si el objeto jon no tiene la propiedad nacimiento

// Crear un objeto con la sintaxis de llaves
const cat = {
  name: 'Jiji',
  color: 'black',
  age: 4,
  adopted: true,
  address: {
    street: 'Burgos 153',
    city: 'Santiago',
    country: 'Chile',
    zipcode: 1234,
  },
};

console.log(cat.color);
console.log(cat.age);
console.log(cat.address.city);
console.log(cat.address.zipcode);
console.log({ nombre: 'Juan', edad: 25, profesion: 'Programador' }.nombre); //En este caso no es necesario crear una variable para acceder a la propiedad del objeto y por ello imprimimos el objeto directamente: "Juan"

// -------------------------
// Ejemplos y buenas prácticas breves
// -------------------------

// Shorthand de propiedades (cuando la variable tiene el mismo nombre que la clave)
const nombre = 'Ana';
const edad = 28;
const persona = { nombre, edad }; // equivalente a { nombre: nombre, edad: edad }
console.log('persona (shorthand):', persona);

// Clonado superficial: spread o Object.assign
const clonPersona = { ...persona, ciudad: 'Valparaíso' };
const clon2 = Object.assign({}, persona, { profesion: 'Dev' });
console.log('clonPersona:', clonPersona);
console.log('clon2:', clon2);

// Evitar mutar el original: ejemplo con "delete" (mutable)
const withEmail = { ...jon, email: 'jon@ejemplo.com' };
const copiaSinEmail = { ...withEmail };
delete copiaSinEmail.email; // muta copiaSinEmail pero no jon
console.log('withEmail:', withEmail);
console.log('copiaSinEmail (sin email):', copiaSinEmail);

// Object.freeze -> inmutabilidad superficial
const CONFIG = Object.freeze({ debug: false });
// CONFIG.debug = true; // no tendrá efecto (o lanzará error en modo estricto)
console.log('CONFIG:', CONFIG);

// Iterar propiedades: Object.entries + for...of (seguro para objetos)
for (const [clave, valor] of Object.entries(jon)) {
  console.log(`clave: ${clave} -> valor:`, valor);
}

// Notas finales:
// - Use métodos de creación/clonado (spread, Object.assign) para evitar mutaciones accidentales.
// - Para métodos que deban usar this, no utilice arrow functions como métodos del objeto (heredan this del contexto léxico).

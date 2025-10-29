//POO
/**
  Clases: es un modelo a seguir
  Objetos: es una instancia de una clase
    -Atributos: es una característica o propiedad del objeto (son variables dentro de un objeto)
    -Métodos: son las acciones (funciones) que un objeto puede realizar (son funciones dentro de un objeto)
*/

// Objeto Literal
// ---------------------------------
/**
 * Un objeto literal es una forma directa de crear un único objeto.
 * Es ideal para objetos que no necesitan ser replicados.
 */

const personajeAnimado0 = {
  nombre: "Scooby Doo",
  genero: "Macho",
  sonar: function () {
    console.log("¡Scooby Dooby Doo!");
  },
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  },
};

console.log("--- Objeto Literal ---");
console.log(personajeAnimado0);
personajeAnimado0.sonar();
personajeAnimado0.saludar();

// Función Constructora y Prototipos
// ---------------------------------

// Objetos personajes
const personajeAnimado1 = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago guau guau");
  },
};

const personajeAnimado2 = {
  nombre: "Pato Lucas",
  sonar() {
    console.log("Hago cuaa cuaa");
  },
};

console.log("--- Objetos por Función Constructora ---");
console.log(personajeAnimado1);
console.log(personajeAnimado2);

/**
 * Una función constructora sirve como una plantilla para crear múltiples
 * objetos con la misma estructura (atributos y métodos).
 *
 * El prototipo es un mecanismo por el cual un objeto puede
 * heredar de un objeto padre atributos y métodos.
 */

// Función constructora
/* function PersonajeAnimado(nombre, genero) {
 * Atributos
  this.nombre = nombre;
  this.genero = genero;
 * Métodos
this.sonar = function () {
    console.log("Hago sonidos porque estoy vivo!");
} */

// Función constructora (plantilla) que define un conjunto de métodos reutilizables
function PersonajeAnimado(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Métodos agregados al prototipo de la función constructora
PersonajeAnimado.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo!");
};
PersonajeAnimado.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre}`);
};

// Creación de instancias (objetos) a partir de la función constructora
const snoopy = new PersonajeAnimado("Snoopy", "Macho");
const patoLucas = new PersonajeAnimado("Lucas", "Macho");

console.log(snoopy);
console.log(patoLucas);

snoopy.sonar(); // Hago sonidos porque estoy vivo!
snoopy.saludar(); // Hola, me llamo Snoopy

patoLucas.sonar(); // Hago sonidos porque estoy vivo!
patoLucas.saludar(); // Hola, me llamo Lucas

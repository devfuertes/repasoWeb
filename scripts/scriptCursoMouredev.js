// Ejercicios del curso Mouredev

//---------Ejercicio Condicionales---------------------------------

// 1. Imprime por consola tu nombre si una variable toma su valor.

const userName = "David";
console.log(userName);

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos.

const nameForm = "David";
const userPass = "12345";
const nameResult = "David";
const passResult = "12345";

if (nameForm === nameResult && userPass === passResult) {
  console.log("Puedes Entrar");
} else {
  console.log("Comprueba tus datos, algo está mal");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

const userNumber = Math.sign(0);
console.log(userNumber);

if (userNumber == 1) {
  console.log("El número es positivo");
} else if (userNumber == -1) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
const userAge = 16;
const resultAge = 18 - userAge;

if (userAge >= 18) {
  console.log("Puedes Votar");
} else {
  console.log(
    `Con ${userAge} No puedes votar. Te faltan ${resultAge} años para poder votar`
  );
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.
userAge >= 18
  ? console.log("Eres Adulto")
  : console.log(
      `Con ${userAge} No eres adulto. Te faltan ${resultAge} años para ser adulto`
    );

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
const month = "diciembre";

switch (month) {
  case "enero":
    console.log("Es el mes de enero");
    break;
  case "febrero":
    console.log("Es el mes de febrero");
    break;
  case "marzo":
    console.log("Es el mes de marzo");
    break;
  case "abril":
    console.log("Es el mes de abril");
    break;
  case "mayo":
    console.log("Es el mes de mayo");
    break;
  case "junio":
    console.log("Es el mes de junio");
    break;
  case "julio":
    console.log("Es el mes de julio");
    break;
  case "agosto":
    console.log("Es el mes de agosto");
    break;
  case "septiembre":
    console.log("Es el mes de septiembre");
    break;
  case "octubre":
    console.log("Es el mes de octubre");
    break;
  case "noviembre":
    console.log("Es el mes de noviembre");
    break;
  case "diciembre":
    console.log("Es el mes de diciembre");
    break;
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.
switch (month) {
  case "enero":
    console.log("enero tiene 31 días");
    break;
  case "febrero":
    console.log("febrero tiene 28 días");
    break;
  case "marzo":
    console.log("marzo tiene 31 días");
    break;
  case "abril":
    console.log("abril tiene 30 días");
    break;
  case "mayo":
    console.log("mayo tiene 31 días");
    break;
  case "junio":
    console.log("junio tiene 30 días");
    break;
  case "julio":
    console.log("julio tiene 31 días");
    break;
  case "agosto":
    console.log("agosto tiene 31 días");
    break;
  case "septiembre":
    console.log("septiembre tiene 30 días");
    break;
  case "octubre":
    console.log("octubre tiene 31 días");
    break;
  case "noviembre":
    console.log("noviembre tiene 30 días");
    break;
  case "diciembre":
    console.log("diciembre tiene 31 días");
    break;
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

const greetings = "DE";

switch (greetings) {
  case "ES":
    console.log("Hola");
    break;
  case "FR":
    console.log("salutations");
    break;
  case "DE":
    console.log("Grüße");
    break;
  case "EN":
    console.log("Hello");
    break;
}

//---------Ejercicio Array Set Map---------------------------------

// 1. Crea un array que almacene cinco animales.
const arrayAnimals = [
  "cobra",
  "geko",
  "dragón de komodo",
  "salamandra",
  "cocodrilo",
];

// 2. Añade dos más. Uno al principio y otro al final.
arrayAnimals.unshift("gusano");
arrayAnimals.push("lagarto");
console.log(arrayAnimals);

// 3. Elimina el que se encuentra en tercera posición.
arrayAnimals.splice(3, 1);
console.log(arrayAnimals);

// 4. Crea un set que almacene cinco libros.
const setBooks = new Set([
  "En las montañas de la locura",
  "El refugio",
  "Entre las espadas",
  "Elantris",
  "El señor de los anillos",
]);

// 5. Añade dos más. Uno de ellos repetido.
setBooks.add("Dagon");
console.log(setBooks);

// 6. Elimina uno concreto a tu elección
setBooks.delete("En las montañas de la locura");
console.log(setBooks);

// 7. Crea un mapa que asocie el número del mes a su nombre.
const mapMonths = new Map([
  ["1", "enero"],
  ["2", "febrero"],
  ["3", "marzo"],
  ["4", "abril"],
  ["5", "mayo"],
  ["6", "junio"],
  ["7", "julio"],
  ["8", "agosto"],
  ["9", "septiembre"],
  ["10", "octubre"],
  ["11", "noviembre"],
  ["12", "diciembre"],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
console.log(mapMonths.has("5"));
console.log(mapMonths);

// 9. Añade al mapa una clave con un array que almacene los meses de verano.
mapMonths.set("verano", ["verano", ["julio", "agosto", "septiembre"]]);
console.log(mapMonths);

// 10. Crea un Array, transformalo a un Set y almacenalo en un Map.
const arrayGames = ["elden ring", "darksoul", "fallout"];
let setGames = new Set(arrayGames);
let mapGames = new Map();
mapGames.set("games", setGames);

console.log(arrayGames);
console.log(setGames);
console.log(mapGames);

//---------Ejercicio Bucles---------------------------------
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.
for (let i = 0; i <= 100; i++) {
  num = i + i;
  if (i === 100) {
    console.log(`La suma del 1 al 100 es: ${num}`);
  }
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.
for (let i = 0; i <= 50; i++) {
  let numEven = i % 2;

  if (numEven === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

const arrayNames = ["Pedro", "Juan", "Carmen", "Elena", "Adrián"];

for (let i = 0; i < arrayNames.length; i++) {
  const name = arrayNames[i];
  console.log(name);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.

let vocals = "aeiouAEIOU";
let text = "David";
let countVocal = 0;

for (let i = 0; i < text.length; i++) {
  if (vocals.includes(text[i])) {
    countVocal++;
  }
}
console.log(`La cantidad de vocales en la cadena es: ${countVocal}`);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

// 8. Usa un bucle para invertir una cadena de texto.

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.

//---------Ejercicio Funciones---------------------------------
// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una funciÓn que reciba dos nÚmeros y devuelva su suma.

// 2. Crea una funciÓn que reciba un array de nÚmeros y devuelva el mayor de ellos.

// 3. Crea una funciÓn que reciba un string y devuelva el nÚmero de vocales que contiene.

// 4. Crea una funciÓn que reciba un array de strings y devuelva un nuevo array con las strings en mayÚsculas.

// 5. Crea una funciÓn que reciba un nÚmero y devuelva true si es primo, y false en caso contrario.

// 6. Crea una funciÓn que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// 7. Crea una funciÓn que reciba un array de nÚmeros y devuelva la suma de todos los nÚmeros pares.

// 8. Crea una funciÓn que reciba un array de nÚmeros y devuelva un nuevo array con cada nÚmero elevado al cuadrado.

// 9. Crea una funciÓn que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// 10. Crea una funciÓn que calcule el factorial de un nÚmero dado.

//---------Ejercicio Objetos---------------------------------

// 1. Crea un objeto con 3 propiedades.

// 2. Accede y muestra su valor.

// 3. Agrega una nueva propiedad.

// 4. Elimina una de las 3 primeras propiedades.

// 5. Agrega una función e invócala.

// 6. Itera las propiedades del objeto.

// 7. Crea un objeto anidado.

// 8. Accede y muestra el valor de las propiedades anidadas.

// 9. Comprueba si los dos objetos creados son iguales.

// 10. Comprueba si dos propiedades diferentes son iguales.

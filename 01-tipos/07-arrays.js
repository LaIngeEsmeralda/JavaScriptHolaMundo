/* arreys = arreglo y algunos le dicen coleccion o en ingles collection.
se utilizan parentesis cuadrados para hacer los arreys literales (arreglos) y dentro de ellos entre comillas 
simples o dobles se pone el contenido directo
*/

let animales = ["chanchito", "caballo"];
console.log(animales);
console.log(animales[0]);
animales[2] = "dragon";
console.log(animales);

animales[10] ="pez";
console.log(animales[7]);
console.log(typeof animales);
console.log(animales.length);



/*
Para mostrar un indice en especifico (el lugar que ocupa) despues del nombre se debe porner
indice cuadrado y mencionar el indice deseado a mostrar
Los indices comienzan en el numero o posicion 0

console.log(animales[0]);

Si algun indice esta ocupado por una posicion pero sin nombre en consola aparecera "undefined"...
console.log(animales[7]);

Para agregar un nuevo indice  o elementos a los arreglos se utilizan los parentecis cuadrados indicando la posicion y el nombre que
desceamos agregar....

animales[2] = "dragon";

console.log(typeof animales);

metodos que vienen desde el prototipo de la clase arrey
animales. ***se depliegan los metodos
devuelve la cantidad de elementos que se encuentran en ese arrey


*/

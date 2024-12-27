// personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje ={
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.edad);
console.log(personaje["anime"]);



/*  Acceder a las propiedades de un objeto:

1.-se pone un punto despues del nombre para ver una propiedad en especifico,
estas mismas se desplegaran despues de poner el punto .  para seleccionar la que deseamos
console.log(personaje.edad);

2.- se pone corchete y dentro de el se ponen comillas simples o dobles (ya que se referencea como STRING)
console.log(personaje["edad"]);
*/

/* Cambiar la propiedad de un atributo

1.- se pone el nombre . el atributo y el nuevo valor.... 
personaje.edad = 11;

2.- se pone entre corchetes y comillas el atributo, despues el igual y el nuevo valor del atributo...
personaje["edad"] = 14;

*/

personaje.edad = 11;

personaje["edad"] = 14;

/* Para borrar una atributo:
Se pone Delete, el nombre, punto y el atributo....

delete personaje.anime

*/

delete personaje.anime;

console.log(personaje);


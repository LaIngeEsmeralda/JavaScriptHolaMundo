function suma(a, b) {
    console.log(arguments);
    return a + b;    
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);





/*
Los varoles dentro de la funcion se llaman PARAMETROS
El PARAMETRO es la letra "a"
function suma(a) {
    return a + 2;    
}


- Los valores que pasamos a las funciones cuendo las llamamos (variables) se llaman ARGUMENTOS...
el ARGUMENTO es el numero "5"....     let resultado = suma(5);

En ambos casos se pueden recibor multiples argumentos y multiples parametros


*/
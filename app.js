// Definir un array
let miArray = [1, 2, 3, 4, 5];

// Uso de .length
console.log("Longitud del array:", miArray.length);

// Acceder a los elementos de un array con el ciclo for
console.log("Elementos del array:");
for (let i = 0; i < miArray.length; i++) {
    console.log("Elemento en la posición", i, ":", miArray[i]);
}

// Agregar elementos al final del array
miArray.push(6);
console.log("Array después de agregar un elemento al final:", miArray);

// Eliminar elementos en diferentes posiciones
let posicionAEliminar = 2;
miArray.splice(posicionAEliminar, 1);
console.log("Array después de eliminar el elemento en la posición", posicionAEliminar, ":", miArray);

// Concatenar dos arrays con concat
let otroArray = [7, 8, 9];
let arrayConcatenado = miArray.concat(otroArray);
console.log("Array concatenado:", arrayConcatenado);

// const PI = 3.1415962;
// const MAX_VALUE = 50;

//El objeto "document" es el primer objeto de nuestro documento y el que engloba todo el documento
//El metodo "getElementById" muestra en la consola del navegador el Elemento seleccionado referente a su ID

//console.log(document.getElementById("encabezado1"));

let btnMostrar = document.getElementById("btnMostrar");

let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");

// The complete document is searched, including the root node.The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName() again.
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

// Permite hacer una consulta con un selector css
let otroElemento = document.querySelector("ul>li"); //El primero que encuentra

let otrosElementos = document.querySelectorAll("ul>li"); //Todos los que encuentre

console.log("otroElmento: ", otroElemento);

console.log("otrosElementos: ", otrosElementos);

console.log(listas.length);//2
// console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.length);//10
console.log(elementos.item(2));


//El innerText es una propiedad de lectura y escritura, se puede leer o modificar solo el texto entre comillas
encabezado1.innerText = "Ejercicio DOM";
encabezado2.innerText = "DOM Exercise";
console.log(encabezado1.innerText, encabezado2.innerText);

// La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
// No usar innerHTML para estar asignando uno por uno los valores, mejor tener todos los elementos juntos y agregarlos una sola vez, no usar seguido "+="
encabezado1.innerHTML = "<em>Ejercicio</em> DOM";

//Evento de escuchar de tipo click
// Puede tener una funcion creada, anonima o tipo flecha
// https://developer.mozilla.org/es/docs/Web/Events

// function handleEvent(event){
//     event.preventDefault();//no hagas lo que haces por defecto
//     console.log("boton btnModificar presionado");
// }

// btnMostrar.addEventListener("click", handleEvent);

btnMostrar.addEventListener("click", function (event){
    event.preventDefault();//no hagas lo que haces por defecto
    console.log("boton btnModificar presionado");
});
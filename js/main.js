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
let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");

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

    // Vamos a crear un elemento
    let element = document.createElement("li");
    element.innerText = "Another item"; // <li>Another item</li>
    element.classList.add("list-group-item"); // Le agregamos la clase al elemento

    let element2 = element.cloneNode(true); //Hacemos una copia del primer Node de la variable "element"
    // let element3 = element.cloneNode(true);
    // let element4 = element.cloneNode(true);

    /*Si se hacen los 2, pero un cuerpo o un elemento no puede estar en 2 espacios al mismo tiempo por lo que se ejecutan los 2 al mismo tiempo, pero se queda con
    el ultimo proceso.*/
    // listas.item(0).before(element); //Inserta el elemento antes de la lista
    //  listas.item(0).prepend(element);

    // listas.item(0).prepend(element2);//Inserta el elemento al inicio de la lista

    // listas.item(0).append(element3);//Inserta el elemento al final de la lista

    // listas.item(0).after(element4);//Inserta el elemento despues de la lista

    // listas.item(1).insertAdjacentElement("afterbegin", element); //Igual al prepend
    // listas.item(1).insertAdjacentElement("beforeend", element2); //Igual al append

    //Inserta el elemento antes de la lista
    listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">Before Begin item</li>`
    );

    //Inserta el elemento al inicio de la lista
    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">After End item</li>`
    );

    //Inserta el elemento al final de la lista
    listas.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">After Begin item</li>`
    );

    //Inserta el elemento despues de la lista
    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">Before End item</li>`
    );

});//btnMostrar

//Se ejecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load", function(event){
    event.preventDefault();
    console.log("Se termino de cargar la pagina");
    
});//load

//MANERA DE OPTIMIZAR TODO EL ANTERIOR PROCEDIMIENTO, USAR UNA FUNCION PARA TODOS LOS CASOS
function txtToUpper(event){
    event.target.value = event.target.value.trim().toUpperCase();
}
txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);


//blur -> cuando se sale del campo 
//txtRFC.addEventListener("blur", function(event){
    //event.preventDefault();
    // txtRFC.value = txtRFC.value.toUpperCase();
    //target hace referencia al RFC
    //event.target.value = event.target.value.toUpperCase();
//});//txtRFC

//RECOMENDABLE USAR LA FUNCION "txtToUpper"
//txtCURP.addEventListener("blur", function(event){
    //event.preventDefault();
    //txtCURP.value = txtCURP.value.toUpperCase();
//});//txtCURP

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
});//txtTelefono

// Pido el nombre al usuario para darle la bienvenida a la pagina web /


let name = prompt("Bienvenido/a a Pagina web, por favor identifiquese con su nombre:");

while ( name === "") {

    name= prompt ( "No ha ingresado nada, por favor ingrese su nombre para poder continuar")
}

// Se crea un array que contendra los productos como objetos dentro del mismo, con su codigo de identificacion, su nombre, su precio, la cantidad de productos nulo y el total nulo

const productos = [{ id:02, producto:"Hondo", precio:400, cant:[], total:[]},
    { id:01, producto:"Playo", precio:450, cant:[], total:[]},
    { id:04, producto:"Aceiteroo", precio:200, cant:[], total:[]},
    { id:06, producto:"Posacuenco", precio:100, cant:[], total:[]},
    { id:03, producto:"Entrada", precio:300, cant:[], total:[]},
    { id:05, producto:"Servilletero", precio:150, cant:[], total:[]},

]

//Se le pedirá al usuario que ingrese la cantidad de unidades de cada producto que desea

productos[0].cant = parseInt(prompt("Cantidad de productos " + productos[0].producto))
productos[1].cant = parseInt(prompt("Cantidad de productos " + productos[1].producto))
productos[2].cant = parseInt(prompt("Cantidad de productos " + productos[2].producto))
productos[3].cant = parseInt(prompt("Cantidad de productos " + productos[3].producto))
productos[4].cant = parseInt(prompt("Cantidad de productos " + productos[4].producto))
productos[5].cant = parseInt(prompt("Cantidad de productos " + productos[5].producto))

//Se calculara el total de cada producto en pesos

productos[0].total = (productos[0].precio * productos[0].cant)
productos[1].total = (productos[1].precio * productos[1].cant)
productos[2].total = (productos[2].precio * productos[2].cant)
productos[3].total = (productos[3].precio * productos[3].cant)
productos[4].total = (productos[4].precio * productos[4].cant)
productos[5].total = (productos[5].precio * productos[5].cant)



console.log(productos)

//Se muestra la cantidad de productos ingresados como se mostraria en un carrito

let totalCant = productos[0].cant + productos[1].cant + productos[2].cant + productos[3].cant + productos[4].cant + productos[5].cant
console.log("La cantidad total de productos es de " + totalCant)

//Se calcula el precio bruto a pagar

let totalPrecio = productos[0].total + productos[2].total + productos[2].total + productos[3].total + productos[4].total + productos[5].total 

console.log("El precio total bruto es de " + totalPrecio)

//Se agragan las funciones para la suma del iva al total de los prodcutos, como asi tambien el calculo de los distintos intereses segun las cuotas que el usuario prefiera

function calculoiva (){

    let iva = totalPrecio + totalPrecio*0.21;

    console.log("El total de unidades que desea con iva incluido es de " + iva)

    efectivo(iva)
    calculotrescuotas(iva)
    calculoseiscuotas(iva)
    calculodocecuotas(iva)
}

console.log(calculoiva())

//Funcion para el calculo de 3 coutas con su interes
function calculotrescuotas (iva){

    let totaltrescoutas = iva * 1.10
    let trescoutas = totaltrescoutas / 3 

    console.log( " El total financiado en 3 coutas será de " + totaltrescoutas.toFixed(2) + " y cada couta sera de " + trescoutas.toFixed(2))
} 


//Funcion para el calculo de 6 coutas con su interes
function calculoseiscuotas (iva){

    let totalseiscoutas = iva * 1.20
    let seiscoutas = totalseiscoutas / 6 

    console.log( " El total financiado en 6 coutas será de " + totalseiscoutas.toFixed(2) + " y cada couta sera de " + seiscoutas.toFixed(2))
} 


//Funcion para el calculo de 12 coutas con su interes
function calculodocecuotas (iva){

    let totaldocecoutas = iva * 1.50
    let docecoutas = totaldocecoutas / 12 

    console.log( " El total financiado en 12 coutas será de " + totaldocecoutas.toFixed(2) + " y cada couta sera de " + docecoutas.toFixed(2))
} 


//Funcion para el calculo del pago en efectivo con un descuento
function efectivo (iva){

    let totalefectivo = iva * 0.85
    let descuentoefectivo = iva * 0.15

    console.log(" De abonar en efectivo se realizara un descuento de " + descuentoefectivo.toFixed(2) + " y el total a abonar sera de " + totalefectivo.toFixed(2))
}

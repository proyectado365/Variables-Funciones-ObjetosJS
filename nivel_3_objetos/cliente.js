// nombredinero hamber

let cliente = {
    nombre: "Jhona",
    dinero: 100,
    hambre: 100
};

function comprar(cliente){
    console.log("El cliente compra")
    cliente.dinero -= 10;
    console.log("dinero de"+cliente.nombre+" actual es: "+cliente.dinero)
}

function comer(cliente){
    console.log("El cliente come")
    cliente.hambre -= 10;
    console.log("hambre de"+cliente.nombre+" actual es: "+cliente.hambre)
}

function mostrarEstado(cliente){
    console.log("Estado del cliente")
    console.log("nombre: "+cliente.nombre)
    console.log("dinero: "+cliente.dinero)
    console.log("hambre: "+cliente.hambre)
}

mostrarEstado(cliente);
comprar(cliente);
comer(cliente);
mostrarEstado(cliente);

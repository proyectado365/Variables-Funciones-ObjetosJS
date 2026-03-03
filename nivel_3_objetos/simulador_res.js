// Simulador Restaurant
let cliente = {
    nombre: "Jhona",
    mesa: 5,
    pedido: "Hamburguesa",
    dinero: 200   
};

let plato = {
    nombre: "Hamburguesa",
    precio: 50,
    
};

function ordenarComida(cliente, plato) {
    console.log("Preparando pedido...");
    console.log("El cliente "+cliente.nombre+" ordeno una "+plato.nombre+".")
}

function pagar(cliente, plato){
    console.log("Pagando...");
    console.log("El cliente "+cliente.nombre+" pago "+plato.precio+".")
    
    console.log("pagado")
}

function mostrarEstado(cliente, plato){
    console.log("Estado del pedido, cliente: ", cliente.nombre, "\npedido: ", plato.nombre, "\nprecio: ", plato.precio)
    
}

ordenarComida(cliente, plato);
pagar(cliente, plato);
mostrarEstado(cliente, plato);

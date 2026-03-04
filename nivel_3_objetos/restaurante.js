// FASE 3 - OBJETOS

// SIMULADOR DE RESTAURANTE

// Objeto cliente
let cliente = {
    nombre: "Carlos",
    dinero: 50,
    hambre: 80
};

// Función ordenar comida
function ordenarComida(cliente) {
    console.log(cliente.nombre + " está ordenando comida...");
    cliente.hambre -= 40;
}

// Función pagar
function pagar(cliente) {
    console.log(cliente.nombre + " está pagando la cuenta...");
    cliente.dinero -= 30;
}

// Función mostrar estado
function mostrarEstado(cliente) {
    console.log("Estado actual de " + cliente.nombre);
    console.log("Dinero: " + cliente.dinero);
    console.log("Hambre: " + cliente.hambre);
}

// Simulación
mostrarEstado(cliente);
ordenarComida(cliente);
pagar(cliente);
mostrarEstado(cliente);
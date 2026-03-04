// FASE 2 - FUNCIONES

// ----------------------   

// HEROE 2

let nombreHeroe = "Voltix";
let energiaHeroe = 100;
let enemigo = "x";

function ataque() {
    console.log(nombreHeroe + " ataca a " + enemigo + " con electricidad ");
    energiaHeroe = energiaHeroe - 20;
    console.log("La energía ahora es " + energiaHeroe + ".");
}

function defender() {
    console.log(nombreHeroe + " se defiende del ataque de " + enemigo + ".");
    energiaHeroe = energiaHeroe - 10;
    console.log("Después de defender, la energía queda en " + energiaHeroe + ".");
}

function recargarEnergia() {
    console.log(nombreHeroe + " está recargando energía...");
    energiaHeroe = energiaHeroe + 30;
    console.log("Energía restaurada a " + energiaHeroe + ".");
}

// FUNCIÓN ESPECIAL - DEFENSA
function escudoMagico() {
    console.log(" ESCUDO ELÉCTRICO ACTIVADO ");
    // Coste por habilidad-especial "-20"
    energiaHeroe = energiaHeroe - 20;
    console.log("El escudo reduce el daño. Energía actual: " + energiaHeroe + ".");
}

console.log("Comienza la batalla entre " + nombreHeroe + " y " + enemigo + ".");

ataque();
defender();
recargarEnergia();
escudoMagico();

console.log("La batalla ha culminado.");
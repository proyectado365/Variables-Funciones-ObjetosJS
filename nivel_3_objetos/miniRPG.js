// FASE 3 - OBJETOS

// MINI RPG

let jugador = {
    nombre: "Voltix",
    vida: 100,
    fuerza: 25,
    nivel: 1
};

function atacar(jugador) {
    console.log(jugador.nombre + " realiza un ataque.");
    jugador.vida -= 10;
}

function subirNivel(jugador) {
    console.log(jugador.nombre + " sube de nivel!");
    jugador.nivel += 1;
    jugador.fuerza += 5;
}

function mostrarJugador(jugador) {
    console.log("Nombre: " + jugador.nombre);
    console.log("Vida: " + jugador.vida);
    console.log("Fuerza: " + jugador.fuerza);
    console.log("Nivel: " + jugador.nivel);
}

// Simulación
mostrarJugador(jugador);
atacar(jugador);
subirNivel(jugador);
mostrarJugador(jugador);
//
let heroe = {
    nombre: "Jhona",
    vida: 100,
    fuerza: 100,
    nivel:1
};

function atacar(heroe){
    console.log("El heroe ataca")
    heroe.vida -= 10;
    console.log("vida de"+heroe.nombre+" actual es: "+heroe.vida)
}

function defender(heroe){
    console.log("El heroe defiende")
    heroe.vida -= 5;
    console.log("vida de"+heroe.nombre+" actual es: "+heroe.vida)
}

function curar(heroe){
    console.log("El heroe se cura")
    heroe.vida += 10;
    console.log("vida de"+heroe.nombre+" actual es: "+heroe.vida)
}

function mostrarEstado(heroe){
    console.log("Estado del heroe")
    console.log("nombre: "+heroe.nombre)
    console.log("vida: "+heroe.vida)
    console.log("fuerza: "+heroe.fuerza)
    console.log("nivel: "+heroe.nivel)
}

function subirNivel(heroe){
    console.log("El heroe sube de nivel")
    heroe.nivel += 1;
    console.log("nivel de"+heroe.nombre+" actual es: "+heroe.nivel)
}

mostrarEstado(heroe);
atacar(heroe);
defender(heroe);
curar(heroe);
subirNivel(heroe);
mostrarEstado(heroe);
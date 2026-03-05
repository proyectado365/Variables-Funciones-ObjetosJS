let nombreHeroe = "MarioBros";
let poder = "saltar";
let enemigo = "waluigi";
let energia = 100;

console.log("Su energia es: "+energia);
console.log("Su nombre es: "+nombreHeroe);
console.log("su enemigo es: "+enemigo);
console.log("su poder es:"+saltar);


function ataque(nombreHeroe,enemigo){
    console.log("Ataque especial "+saltar)
    console.log("Energia actual: "+energia)
    console.log("Energia actual heroe: "+energia-20)
}

function defender(nombreHeroe){
    console.log("Defender: "+nombreHeroe)
    console.log("Energia actual: "+energia)
    console.log("Energia actual heroe: "+energia-10)
}
function recargarEnergia(nombreHeroe){
    console.log("Recargar Energia: "+nombreHeroe)
    console.log("Energia actual: "+energia)
    console.log("Energia actual heroe: "+energia+50)
}

ataque(nombreHeroe,enemigo)
defender(nombreHeroe)
recargarEnergia(nombreHeroe)



let nombreHeroe = "WindowsDefender";
let energiaHeroe = 100;
let enemigo = "Ransomware";


function ataque() {
  console.log(nombreHeroe + " ataca a " + enemigo + "!");
  energiaHeroe = energiaHeroe - 30;
  console.log("La energía de " + nombreHeroe + " ahora es " + energiaHeroe + ".");
}

function defender() {
  console.log(nombreHeroe + " se defiende del ataque de " + enemigo + ".");
  energiaHeroe = energiaHeroe - 10;
  console.log("Después de defender, la energía queda en " + energiaHeroe + ".");
}

function recargarEnergia() {
  console.log(nombreHeroe + " está recargando energía...");
  energiaHeroe = energiaHeroe + 40;
  console.log("Energía restaurada a "+energiaHeroe +".");
}

console.log("Comienza la batalla entre " +nombreHeroe+" y " + enemigo+ ".");

ataque();    // realiza un atake el heroe
defender();       // defenza de heroe
recargarEnergia(); // curacion y recupera energiaa

console.log("La batalla ha culminado.");

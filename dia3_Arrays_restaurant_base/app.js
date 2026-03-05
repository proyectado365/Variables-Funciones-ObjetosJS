// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
  { nombre: "Arroz con pollo", precio: 12, stock: 5 },
  { nombre: "Lomo saltado", precio: 18, stock: 3 },
  { nombre: "Sopa", precio: 8, stock: 10 },
  { nombre: "Chaufa", precio: 12, stock: 5 },
  { nombre: "Biztec a lo pobre", precio: 20, stock: 7 }
];

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
  const output = document.getElementById("output");
  output.innerHTML = ""; // limpiar

  // crear una lista HTML simple
  let html = "<ul>";

  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];
    html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
  }

  html += "</ul>";
  output.innerHTML = html;

  contarPlatos();//aqui lo llamo
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
  const nuevoPlato = { nombre: "guisado de res", precio: 19, stock: 7 };
  menu.push(nuevoPlato);
}

// para contar platos------
function contarPlatos() {
  const output = document.getElementById("output");
  output.innerHTML += `<p>Total de platos en el menú: ${menu.length}</p>`;
}

function buscarPlatoPorNombre(nombre) {

  let plato = menu.find(platoBuscado => platoBuscado.nombre.toLowerCase() === nombre.toLowerCase());
  if (!plato) {
    return "plato no encontrado";
  }
  return plato.nombre + " $ " + plato.precio;
  //${plato.nombre} - S/ ${plato.precio}-interpolacion variable concat
}


function filtrarStockbajo() {
  return menu.filter(m = m.stock <= 3)
}

function obtenerResumenMenu() {
  return menu.map(m => `${m.nombre} - S/. ${m.precio}`)
}


function filtrarStockBajo(stock){

  
}


// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
  renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
  agregarPlatoDemo();
  renderMenu();
});
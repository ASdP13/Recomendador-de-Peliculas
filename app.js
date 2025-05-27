import { db } from "./firebase-config.js";
import { ref, get, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

let peliculas = [];
let historial = {
  "Acción": 0,
  "Drama": 0,
  "Ciencia Ficción": 0,
  "Animación": 0
};

// Carga las películas desde Firebase
async function cargarPeliculasDesdeFirebase() {
  const peliculasRef = ref(db, 'peliculas');
  const snapshot = await get(peliculasRef);

  if (snapshot.exists()) {
    peliculas = snapshot.val();
    console.log("Películas cargadas:", peliculas);
  } else {
    console.warn("No se encontraron películas. Agrega manualmente desde Firebase.");
  }
}

// Guarda las películas por primera vez si no existen
/*async function guardarPeliculasIniciales() {
  const peliculasBase = [
    {titulo: 'Avengers', genero: 'Acción'},
    {titulo: 'Forrest Gump', genero: 'Drama'},
    {titulo: 'The Matrix', genero: 'Ciencia Ficción'},
    {titulo: 'Toy Story', genero: 'Animación'},
    {titulo: 'Inception', genero: 'Acción'},
    {titulo: 'The Godfather', genero: 'Drama'},
    {titulo: 'The Dark Knight', genero: 'Acción'},
    {titulo: 'The Shawshank Redemption', genero: 'Drama'},
    {titulo: 'Star Wars', genero: 'Ciencia Ficción'},
    {titulo: 'Frozen', genero: 'Animación'},
    {titulo: 'Guardians of the Galaxy', genero: 'Acción'},
    {titulo: 'The Social Network', genero: 'Drama'},
    {titulo: 'Interstellar', genero: 'Ciencia Ficción'},
    {titulo: 'How to Train Your Dragon', genero: 'Animación'},
    {titulo: 'Avengers: Endgame', genero: 'Acción'}
  ];
  await set(ref(db, 'peliculas'), peliculasBase);
}*/

// Recomendación normal
function recommendPelicula() {
  const genero = document.getElementById('genreSelect').value;

  if (!genero || !(genero in historial)) {
    return alert("Selecciona un género válido.");
  }

  historial[genero]++;
  const filtradas = peliculas.filter(p => p.genero === genero);
  const aleatoria = filtradas[Math.floor(Math.random() * filtradas.length)];
  if (aleatoria) {
    document.getElementById('recomendacion').textContent = `Le recomendamos: ${aleatoria.titulo}`;
  } else {
    document.getElementById('recomendacion').textContent = `No hay películas de ese género`;
  }
}

// Recomendación con IA
function recomendarConIA() {
  const generos = ["Acción", "Drama", "Ciencia Ficción", "Animación"];
  console.log("Historial actual:", historial);

  // Encuentra el máximo valor
  let maxValor = Math.max(...generos.map(g => historial[g]));

  // Encuentra todos los géneros con ese máximo
  let generosMaximos = generos.filter(g => historial[g] === maxValor);

  // Escoge uno al azar entre los máximos
  let mejorGenero = generosMaximos[Math.floor(Math.random() * generosMaximos.length)];

  // Elige película aleatoria de ese género
  const pelisFiltradas = peliculas.filter(p => p.genero === mejorGenero);
  if (pelisFiltradas.length === 0) {
    document.getElementById('recomendacion').textContent = `No hay películas del género ${mejorGenero}`;
    return;
  }
  const aleatoria = pelisFiltradas[Math.floor(Math.random() * pelisFiltradas.length)];

  document.getElementById('recomendacion').textContent =
    `Según sus gustos, le recomendamos: ${aleatoria.titulo} (${mejorGenero})`;
}




// Iniciar
(async () => {
  await cargarPeliculasDesdeFirebase();

  document.getElementById('botonrecomendar').addEventListener('click', recommendPelicula);
  document.getElementById('recomendacionIA').addEventListener('click', recomendarConIA);
})();
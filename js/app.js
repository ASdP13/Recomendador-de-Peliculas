import { db } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

let peliculas = [
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

let historial = {
  "Acción": 0,
  "Drama": 0,
  "Ciencia Ficción": 0,
  "Animación": 0
};

// Intenta cargar las películas desde Firebase y si falla, usa local
async function cargarPeliculas() {
  try {
    const peliculasRef = ref(db, 'peliculas');
    const snapshot = await get(peliculasRef);
    if (snapshot.exists()) {
      peliculas = snapshot.val();
      console.log("Películas cargadas desde Firebase:", peliculas);
    } else {
      console.warn("No hay datos en Firebase, usando local.");
    }
  } catch (error) {
    console.warn("Error al conectar con Firebase, usando datos locales:", error);
  }
}

function recommendPelicula() {
  const genero = document.getElementById('genreSelect').value;
  if (!genero || !(genero in historial)) {
    document.getElementById('recomendacion').textContent='No se han encontrado películas de este género';
    return;
  }
  historial[genero]++;
  const filtradas = peliculas.filter(p => p.genero === genero);
  if (filtradas.length === 0) {
    document.getElementById('recomendacion').textContent = 'No hay películas de ese género';
    return;
  }
  const aleatoria = filtradas[Math.floor(Math.random() * filtradas.length)];
  document.getElementById('recomendacion').textContent = `Le recomendamos: ${aleatoria.titulo}`;
}

function recomendarConIA() {
  const generos = Object.keys(historial);
  let maxValor = Math.max(...generos.map(g => historial[g]));
  let generosMaximos = generos.filter(g => historial[g] === maxValor);
  let mejorGenero = generosMaximos[Math.floor(Math.random() * generosMaximos.length)];
  const pelisFiltradas = peliculas.filter(p => p.genero === mejorGenero);
  if (pelisFiltradas.length === 0) {
    document.getElementById('recomendacion').textContent = `No hay películas del género ${mejorGenero}`;
    return;
  }
  const aleatoria = pelisFiltradas[Math.floor(Math.random() * pelisFiltradas.length)];
  document.getElementById('recomendacion').textContent = `Según sus gustos, le recomendamos: ${aleatoria.titulo} (${mejorGenero})`;
}

(async () => {
  await cargarPeliculas();

  document.getElementById('botonrecomendar').addEventListener('click', recommendPelicula);
  document.getElementById('recomendacionIA').addEventListener('click', recomendarConIA);
})();
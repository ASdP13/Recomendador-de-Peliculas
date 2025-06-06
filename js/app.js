import { db } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

let peliculas = [];

let historial = {
  "Acción": 0,
  "Drama": 0,
  "Ciencia Ficción": 0,
  "Animación": 0
};

async function cargarPeliculas() {
  try {
    const rootRef = ref(db, '/'); // Leer desde la raíz
    const snapshot = await get(rootRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Datos crudos de Firebase:", data);
      peliculas = data.peliculas || [];
      console.log("Películas cargadas desde Firebase:", peliculas);
    } else {
      console.warn("No hay datos en Firebase");
    }
  } catch (error) {
    console.warn("Error al conectar con Firebase:", error);
  }
}

function recommendPelicula() {
  const genero = document.getElementById('genreSelect').value;
  if (!genero || !(genero in historial)) {
    document.getElementById('recomendacion').textContent = 'No se han encontrado películas de este género';
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

function recomendarGustos() {
  const generos = Object.keys(historial);
  let maxValor = Math.max(...generos.map(g => historial[g]));

  if (maxValor === 0) {
    document.getElementById('recomendacion').textContent = "Su historial está vacío, pulse \"Recomendar película\" primero";
    return;
  }

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
  document.getElementById('recomendaciongustos').addEventListener('click', recomendarGustos);
})();

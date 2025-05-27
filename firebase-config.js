import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEypBhc7YCqf0RqBgdE2GCAc0Gl3Wt_eY",
  authDomain: "recomendador-de-pelicula.firebaseapp.com",
  databaseURL: "https://recomendador-de-pelicula-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recomendador-de-pelicula",
  storageBucket: "recomendador-de-pelicula.appspot.com",
  messagingSenderId: "568575347292",
  appId: "1:568575347292:web:079d3b146fccb187763499",
  measurementId: "G-9297P40G28"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
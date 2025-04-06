//Lista de películas, cada una tiene un título y un género
const peliculas=[
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

//Historial: Cuenta cuántas veces el usuario ha elegido cada género
let historial={
    "Acción": 0,
    "Drama": 0,
    "Ciencia Ficción": 0,
    "Animación": 0
};

//Función para la recomendación sin IA, basada solo en la elección actual
function recommendPelicula(){
    //Se obtiene el género seleccionado del <select>
    const genero=document.getElementById('genreSelect').value;

    //Se aumenta el contador de ese género seleccionado en el historial
    historial[genero]++;

    //Se filtran las películas que coinciden con el género seleccionado
    const filtradas=peliculas.filter(p=> p.genero===genero);

    //Si no hay películas, se muestra un mensaje de error
    if(filtradas.length===0){
        document.getElementById('recomendacion').textContent='No se han encontrado películas de este género';
    }else{
        //Si hay, se elige una aleatoriamente
        const aleatoria=filtradas[Math.floor(Math.random()*filtradas.length)];

        //Se muestra el resultado
        document.getElementById('recomendacion').textContent='Le recomendamos: '+aleatoria.titulo;
    }
}

//Función que "predice" el género favorito del usuario según su historial usando TensorFlow.js
async function predecirGeneroFavorito(historial){
    //Lista de géneros en orden
    const generos=["Acción", "Drama", "Ciencia Ficción", "Animación"];

    //Se crean los tensores de entrada (x): 0, 1, 2, 3 para representar los cuatro géneros
    const xs=tf.tensor2d([[0], [1], [2], [3]]);

    //Se crean los tensores de salida (y): Las veces que el usuario ha elegido cada género
    const ys=tf.tensor2d([
        [historial["Acción"]],
        [historial["Drama"]],
        [historial["Ciencia Ficción"]],
        [historial["Animación"]]
    ]);

    //Se crea un modelo secuencial simple
    const model=tf.sequential();

    //Se añade una capa densa con un solo modelo secuencial simple
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    //Se compila el modelo con descenso de gradiente estocástico (sgd)
    model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

    //Se entrena el modelo con los datos
    await model.fit(xs, ys,{epochs: 200});

    //En este punto se va a predecir cuál es el género más "preferido"
    let mejorGenero=null;
    let maxValor=-Infinity;

    for (let i=0; i < generos.length; i++){
        //Se predice cuánta preferencia tiene el modelo por este género
        const prediccion=model.predict(tf.tensor2d([[i]])).dataSync()[0];

        //Se comprueba si es el mayor valor
        if (prediccion > maxValor){
            maxValor=prediccion;
            mejorGenero=generos[i]; //Guardamos el género con mayor predicción
        }
    }

    //Se devuelve el género con más preferencia según la IA
    return mejorGenero;
}

//Evento para el botón de recomendación con IA
document.getElementById('recomendacionIA').addEventListener('click', async()=>{
    //Se obtiene el género predicho por la IA
    const generoIA=await predecirGeneroFavorito(historial);

    //Se filtran las películas del género elegido
    const pelisFiltradas=peliculas.filter(p=> p.genero===generoIA);

    //Se elige una película al azar
    const aleatoria=pelisFiltradas[Math.floor(Math.random() * pelisFiltradas.length)];

    //Se muestra la recomendación con IA
    document.getElementById('recomendacion').textContent='Según sus gustos, le recomendamos: '+aleatoria.titulo+' ('+generoIA+')';
});

//Evento para el botón de recomendación normal (sin IA)
document.getElementById('botonrecomendar').addEventListener('click', recommendPelicula);

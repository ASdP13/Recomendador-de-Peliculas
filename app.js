//Conjunto de datos de películas
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
    {titulo: 'The Avengers: Endgame', genero: 'Acción'}
];

//Función para recomendar películas basadas en el género seleccionado
function recommendPelicula(){
    const genero=document.getElementById('generoSelect').value;  //Obtener el género elegido
    const filteredPeliculas=peliculas.filter(pelicula=>pelicula.genero===genero);  //Filtrar las películas por género

    if(filteredPeliculas.length===0){
        document.getElementById('recomendacion').textContent='No hay películas de este género.';    //Si el array está vacío , se muestra el mensaje
    }else{
        //Si hay películas , se selecciona una película aleatoria del género seleccionado
        const randomPelicula=filteredPeliculas[Math.floor(Math.random()*filteredPeliculas.length)];
        document.getElementById('recomendacion').textContent='Te recomendamos: '+randomPelicula.titulo;
    }
}

//Asignar la función de recomendación al botón
document.getElementById('botonrecomendar').addEventListener('click', recommendPelicula);
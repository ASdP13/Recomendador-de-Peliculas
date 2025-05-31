# Recomendador de películas
![imagen](https://github.com/user-attachments/assets/e3db5e5b-609a-425c-8eb1-e35957ebe0e3)
<br><br>
## Introducción
Este es un proyecto web interactivo que recomienda películas al usuario en función del género que se seleccione (como Acción, Drama, Animación o Ciencia Ficción). Además, incluye una funcionalidad que simula un sistema de recomendación en el que el sistema no solo hace recomendaciones aleatorias, sino que también predice el género favorito o preferido por el usuario en función de su historial de elecciones.
<br><br>
## Características
- Interfaz web sencilla y responsive.
- Selector de género de películas para el usuario.
- Recomendación aleatoria de una película según el género elegido.
- Recomendación Inteligente basada en el historial de elecciones del usuario.
<br><br>
## Tecnologías utilizadas
- **![HTML](https://img.shields.io/badge/-HTML-%23e34f26?style=flat&labelColor=%23ffffff&logo=HTML5)** – Estructura de la página web.
- **![CSS](https://img.shields.io/badge/-CSS-%2300a2ff?style=flat&labelColor=%23007ec6&logo=CSS3)** – Estilos y presentación visual.
- **![JavaScript](https://img.shields.io/badge/-JavaScript-%23f7df1e?style=flat&labelColor=%23000000&logo=JavaScript)** – Lógica de funcionamiento y eventos.
- **![Firebase](https://img.shields.io/badge/-Firebase-%23ffc400?style=flat&labelColor=%23dd2c00&logo=Firebase)** – Base de datos en tiempo real para almacenar y cargar datos de películas.
### Dependencias externas
- [Firebase Realtime Database (via CDN)](https://firebase.google.com/docs/database/web/start)
<br><br>
## ¿Cómo utilizarlo?
### Ejecución online
Acceder al siguiente enlace
<br>
[https://asdp13.github.io/Recomendador-de-Peliculas/](https://asdp13.github.io/Recomendador-de-Peliculas/)
### Ejecución en local
1. Clonar este repositorio o descargar los archivos.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar la extensión Live Server.
4. Hacer "click" en el botón Go Live en la esquina inferior derecha.
5. Esperar a que se abra el navegador.
> 💡 *Nota*: Live Server es una extensión para Visual Studio Code que permite ejecutar archivos HTML en un servidor local. No es una dependencia del proyecto, pero facilita su ejecución en entorno local.
### Versión estándar
1. Seleccionar un género de películas del menú desplegable.
2. Hacer "click" en el botón de "Recomendar película"
3. Aparecerá una película sugerida.
### Versión sobre gustos
1. Seleccionar un género de películas del menú desplegable.
2. Hacer "click" en el botón de "Recomendar según gustos"
3. Aparecerá una película sugerida al tener en cuenta el historial de selecciones para predecir el género preferido.
<br><br>
![imagen](https://github.com/user-attachments/assets/63f9c6ba-2ebb-4e0d-a63e-a96becef3d3c)
<br><br>
## Proceso de despliegue
Se ha utilizado GitHub Pages para servir el frontend estático. Para el backend, se ha configurado Firebase Realtime Database como base de datos en la nube con reglas públicas de lectura y escritura. Se ha establecido la conexión desde la aplicación al proyecto de Firebase usando la configuración SDK. Finalmente, se ha verificado el correcto funcionamiento de la aplicación online, asegurando que los datos se carguen desde Firebase.
<br><br>
## Base de datos
### Conexión a la bases de datos online
La conexión con Firebase se realiza desde el código JavaScript usando la configuración SDK una vez se ha accedido a la aplicación. Firebase utiliza una base de datos Real Time Database la cual tiene ya guardadas diferentes películas.
### Conexión a la base de datos en local
Una vez accedido a la aplicación, se conectará directamente con Firebase a través del código JavaScript usando la configuración SDK del archivo de configuración de Firebase. Firebase utiliza una base de datos Real Time Database la cual tiene ya guardadas diferentes películas.
### Estructura de la tabla
La base de datos utilizada en este proyecto es Firebase Realtime Database. La estructura es una lista de películas agrupadas bajo el nodo principal peliculas. Cada película está representada como un objeto dentro de un array y contiene dos propiedades:
- _"titulo":_ Nombre de la película _(Cadena de texto)_.
- _"genero":_ Categoría a la que pertenece _("Acción", "Drama", "Ciencia Ficción" y "Animación")_.
<br><br>
![imagen](https://github.com/user-attachments/assets/d3aac3f4-32ce-4520-b0a5-354873ad5297)

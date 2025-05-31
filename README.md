# Recomendador de películas con Inteligencia Artificial
![imagen](https://github.com/user-attachments/assets/caceb03d-c872-4982-9544-4915167f819d)
<br><br>
## Introducción
Este es un proyecto web interactivo que recomienda películas al usuario en función del género que se seleccione (como Acción, Drama, Animación o Ciencia Ficción). Además, incluye una funcionalidad de Inteligencia Artificial (IA) basada en ***TensorFlow.js***, que simula un sistema de recomendación. El sistema no solo hace recomendaciones aleatorias, sino que también predice el género favorito o preferido por el usuario en función de su historial de elecciones.
<br><br>
## Características
- Interfaz web sencilla y responsive.
- Selector de género de películas para el usuario.
- Recomendación aleatoria de una película según el género elegido.
- Recomendación Inteligente usando IA basada en el historial de elecciones del usuario.
- Posibilidad de ampliar el sistema con un modelo de IA real.
- Integración básica de TensorFlow.js para demostrar el uso de bibliotecas de IA en la web.
<br><br>
## Tecnologías utilizadas
- **![HTML](https://img.shields.io/badge/-HTML-%23e34f26?style=flat&labelColor=%23ffffff&logo=HTML5)** – Estructura de la página web.
- **![CSS](https://img.shields.io/badge/-CSS-%2300a2ff?style=flat&labelColor=%23007ec6&logo=CSS3)** – Estilos y presentación visual.
- **![JavaScript](https://img.shields.io/badge/-JavaScript-%23f7df1e?style=flat&labelColor=%23000000&logo=JavaScript)** – Lógica de funcionamiento y eventos.
- **![TensorFlow.js](https://img.shields.io/badge/-TensorFlow.js-%23ff6f00?style=flat&labelColor=%23ffffff&logo=TensorFlow)** – Modelo de IA para la predicción del género favorito del usuario.
- **![Firebase](https://img.shields.io/badge/-Firebase-%23ffc400?style=flat&labelColor=%23dd2c00&logo=Firebase)** – Base de datos en tiempo real para almacenar y cargar datos de películas.
### Dependencias externas
- [Firebase Realtime Database (via CDN)](https://firebase.google.com/docs/database/web/start)
- [TensorFlow.js (via CDN)](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs)
<br><br>
## ¿Cómo utilizarlo?
### Ejecución en local
1. Clonar este repositorio o descargar los archivos.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Instalar la extensión Live Server.
4. Hacer "click" en el botón Go Live en la esquina inferior derecha.
5. Esperar a que se abra el navegador.
> 💡 *Nota*: Live Server es una extensión para Visual Studio Code que permite ejecutar archivos HTML en un servidor local. No es una dependencia del proyecto, pero facilita su ejecución en entorno local.
#### Versión estándar
1. Seleccionar un género de películas del menú desplegable.
2. Hacer "click" en el botón de "Recomendar película"
3. Aparecerá una película sugerida.
#### Versión con IA
1. Seleccionar un género de películas del menú desplegable.
2. Hacer "click" en el botón de "Recomendar con IA"
3. Aparecerá una película sugerida al tener en cuenta el historial de selecciones para predecir el género preferido.
<br><br>
## ¿Cómo funciona la Inteligencia Artificial?
La aplicación no solo realiza recomendaciones aleatorias, sino que también utiliza **TensorFlow.js** para predecir el género de película favorito del usuario, basándose en su historial de selecciones. Este enfoque se implementa mediante una red neuronal simple, que se entrena con los datos de las elecciones previas para predecir qué género es más probable que el usuario prefiera.
![imagen](https://github.com/user-attachments/assets/ed926138-6e8d-462d-9cef-d9cbabc5d122)

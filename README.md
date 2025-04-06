# Recomendador de películas con Inteligencia Artificial
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
## Tecnologías usadas
- **HTML** – Estructura de la página web.
- **CSS** – Estilos y presentación visual.
- **JavaScript** – Lógica de funcionamiento y eventos.
- **TensorFlow.js** – Modelo de IA para la predicción del género favorito del usuario.
<br><br>
## ¿Cómo utilizarlo?
### Versión estándar
1. Clonar este repositorio o descargar los archivos.
2. Abrir el archivo index.html en el navegador.
3. Seleccionar un género de películas del menú desplegable.
4. Hacer "click" en el botón de "Recomendar película" y aparecerá una película sugerida.
### Versión con IA
1. Clonar este repositorio o descargar los archivos.
2. Abrir el archivo index.html en el navegador.
2. Seleccionar un género de películas del menú desplegable.
3. Hacer "click" en el botón de "Recomendar con IA" y aparecerá una película sugerida al tener en cuenta el historial de selecciones para predecir el género preferido.
<br><br>
## ¿Cómo funciona la Inteligencia Artificial?
La aplicación no solo realiza recomendaciones aleatorias, sino que también utiliza **TensorFlow.js** para predecir el género de película favorito del usuario, basándose en su historial de selecciones. Este enfoque se implementa mediante una red neuronal simple, que se entrena con los datos de las elecciones previas para predecir qué género es más probable que el usuario prefiera.

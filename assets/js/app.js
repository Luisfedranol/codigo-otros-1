const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {//se agregó la palabra reservada async
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    
    if (!response.ok) {
      throw new Error('Usuario no encontrado'); // Manejo de errores si la respuesta no es correcta
    }
    
    const data = await response.json(); // Obtener datos como JSON
    console.log(data); // Para depuración

    // Actualizar el contenido del DOM con la información del usuario
    $n.textContent = data.name;
    $b.textContent = data.blog || 'No disponible'; // Manejo si no hay blog
    $l.textContent = data.location || 'No disponible'; // Manejo si no hay ubicación
  } catch (err) {
    handleError(err); // Llamar a la función de manejo de errores
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.error(err); // Usar console.error para errores
  $n.textContent = `Algo salió mal: ${err.message}`; // Mostrar mensaje de error
}

// Ejecutar la función con un nombre de usuario de ejemplo
displayUser('stolinski');
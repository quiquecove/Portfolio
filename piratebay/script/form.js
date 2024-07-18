// Obtener el botón de mostrar formulario
// Obtener los valores ingresados por el usuario en el formulario de registro
var registroEmail = document.getElementById("registro_email").value;
var registroContrasena = document.getElementById("registro_contrasena").value;


// Obtener la sección de inicio de sesión
var seccionLogin = document.querySelector(".login");

// Agregar un evento de clic al botón de mostrar formulario
botonMostrarFormulario.addEventListener("click", function() {
  seccionLogin.style.display = "none"; // Ocultar sección de inicio de sesión
  formularioRegistro.style.display = "block"; // Mostrar formulario de registro
});

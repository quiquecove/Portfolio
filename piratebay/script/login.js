// Array de usuarios y contraseñas
var usuarios = [
    { email: "usuario1@example.com", contrasena: "contrasena1" },
    { email: "usuario2@example.com", contrasena: "contrasena2" },
    { email: "usuario3@example.com", contrasena: "contrasena3" },
    { email: "a", contrasena: "a" }
  ];
  
  // Función para comprobar el email y contraseña ingresados
  function comprobarCredenciales() {
    // Obtener los valores ingresados por el usuario
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;
  
    // Comprobar si el email y contraseña coinciden con un usuario
    var usuarioEncontrado = usuarios.find(function(usuario) {
      return usuario.email === email && usuario.contrasena === contrasena;
    });
  
    if (usuarioEncontrado) {

      console.log("Acceso concedido");
      window.location.assign("index.html");

    } else {
      
      console.log("Acceso denegado");
      alert("Usuario o contraseña no válidos");
    }
  }
  
  // Esperar a que el DOM se cargue completamente
  document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de acceder
    var botonAcceder = document.getElementById("boton-acceder");
  
    // Agregar un evento de clic al botón de acceder
    botonAcceder.addEventListener("click", comprobarCredenciales);
  
    // Obtener el botón de mostrar formulario
    var botonMostrarFormulario = document.getElementById("mostrar-formulario");
  
    // Obtener el formulario de registro
    var formularioRegistro = document.getElementById("formulario-registro");
  
    // Obtener la sección de inicio de sesión
    var seccionLogin = document.querySelector(".login");
    //Obetener el formulario de Login
    var formularioLogin = document.getElementById("formulario-login");
  
    // Agregar un evento de clic al botón de mostrar formulario
    botonMostrarFormulario.addEventListener("click", function() {
      seccionLogin.style.display = "none"; // Ocultar sección de inicio de sesión
      formularioRegistro.style.display = "block"; // Mostrar formulario de registro
      formularioRegistro.style.marginTop = "auto";

    });
  
    // Obtener el botón de registrarse
    var botonRegistrarse = document.getElementById("boton-regis");
  
    // Agregar un evento de clic al botón de registrarse
    botonRegistrarse.addEventListener("click", function() {
      var registroEmail = document.getElementById("registro_email").value;
      var registroContrasena = document.getElementById("registro_contrasena").value;
    
      // Verificar si el correo electrónico ya está registrado
      var correoExistente = usuarios.some(function(usuario) {
        return usuario.email === registroEmail;
      });
    
      // Verificar si el correo electrónico es válido
      var emailValido = /\S+@\S+\.\S+/.test(registroEmail);
    
      if (correoExistente) {
        alert("El correo electrónico ya está registrado. Por favor, ingrese otro correo.");
      } else if (!emailValido) {
        alert("Por favor, ingrese un correo electrónico válido.");
      } else {
        // Agregar el nuevo usuario al array de usuarios
        usuarios.push({ email: registroEmail, contrasena: registroContrasena });
    
        // Ocultar formulario de registro y mostrar sección de inicio de sesión
        formularioRegistro.style.display = "none";
        seccionLogin.style.display = "block";
        formularioRegistro.style.marginTop = "16em";
        formularioLogin.style.marginLeft = "10em";
        console.log(usuarios); //Irene, con esto puedes ver que se añaden los nuevos usuarios válidos en cuanto pulsas el botón de registrar
      }
    });

    var botonVolverAtras = document.getElementById("boton-volver-atras");

// Agregar un evento de clic al botón para volver atrás
botonVolverAtras.addEventListener("click", function() {
  formularioRegistro.style.display = "none";
  seccionLogin.style.display = "block";
  formularioRegistro.style.marginTop = "16em";
  formularioLogin.style.marginLeft = "10em";
});
    
  });
  
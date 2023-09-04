<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recoge los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $movil = $_POST['movil'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    // Dirección de correo a la que se enviará el mensaje
    $destinatario = 'quiquehuertalopez@gmail.com';

    // Construye el mensaje de correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n";
    $contenido .= "Nº móvil: $movil\n";
    $contenido .= "Asunto: $asunto\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo
    $headers = "From: $email";

    // Envía el correo electrónico
    mail($destinatario, $asunto, $contenido, $headers);

    // // Redirige a una página de confirmación
    // header('Location: confirmacion.html'); // Reemplaza con la página de confirmación que desees
    exit();
}
?>

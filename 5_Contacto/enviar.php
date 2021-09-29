<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto- Mensaje de enviado</title>
</head>
<body>
    <center>
    <?php 
$myemail = 'caro63diana@gmail.com';
$name = $_POST['nombre'];
$email = $_POST['email'];
$message = $_POST['mensaje'];

$to = $myemail;
$email_subject = "Nuevo mensaje: $subject";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
echo "El mensaje se ha enviado correctamente";
?>


Mucha suerte con tu primer formulario de contacto!! :D

Siguenos en:
https://twitter.com/TonoWebs
https://www.facebook.com/TonoWebs/
        <form method="post" action="enviar.php">
            <input type="text" name="nombre" placeholder="NOMBRE">
            <input type="email" name="email" placeholder="CORREO">
            <textarea type="text" name="mensaje" placeholder="MENSAJE"
            ></textarea>
            <input type="submit" value="ENVIAR">

        </form>
    </center>
    
</body>
</html>
<?php 

$name = $_POST['name']; 
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message']; 

$header = 'De:' .$mail. "\r\n"; 
$header = "Content-Type: text/pain";

$message = "Este mensaje ha sido enviado por: " .$name. "\r\n"; 
$message =  "Su email es" .$email. "\r\n"; 
$message = "Mensaje" .$_POST['message']. "\r\n"; 

$para = 'juanpablozabala21@gmail.com'; 
$subject = 'Asunto del mensaje'; 

mail($para, $asunto, utf8_decode($message), $header); 

header("Location:index.html");

?>  
<?php 

$server = "localhost";
$user = "root";
$pass = "";
$bd = "bd_front";


$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");


$sql = "SELECT * FROM usuarios";
mysqli_set_charset($conexion, "utf8"); 

if(!$result = mysqli_query($conexion, $sql)) die();

$clientes = array(); 

while($row = mysqli_fetch_array($result)) 
{ 
    $id=$row['Id_usuario'];
    $nombre=$row['Nombre'];
    $apellido=$row['Apellido1'];
    $sexo=$row['Sexo'];
    $correo=$row['Correo'];
    $contraseña=$row['Contraseña'];
     

    $clientes[] = array('Id_usuario'=> $id, 'Nombre'=> $nombre, 'Apellido1'=> $apellido, 'Sexo'=> $sexo,
                        'Correo'=> $correo, 'Contraseña'=> $contraseña, 'Acciones' => "<a  href=index.php> <button type=button class=form_submit>Borrar</button></a>");

}
    

$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  


$json_string = json_encode($clientes);
echo $json_string;

  

?>
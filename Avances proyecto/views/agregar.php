<?php

include "db.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];

    $query = "INSERT INTO clientes (nombre, apellidos) VALUES ('$nombre', '$apellidos')";
    $resultado = mysqli_query($conexion, $query);

    if ($resultado) {
        echo "<script language='JavaScript'>
            alert('Cliente agregado correctamente.');
            location.assign('../views/index.php');
            </script>";
    } else {
        echo "<script language='JavaScript'>
            alert('Error al agregar el cliente.');
            location.assign('../views/index.php');
            </script>";
    }
}
?>

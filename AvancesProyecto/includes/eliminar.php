<?php

include "db.php";

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $query = "DELETE FROM clientes WHERE id = '$id'";
    $resultado = mysqli_query($conexion, $query);

    if ($resultado) {
        echo "<script language='JavaScript'>
            alert('Cliente eliminado correctamente.');
            location.assign('../views/index.php');
            </script>";
    } else {
        echo "<script language='JavaScript'>
            alert('Error al eliminar el cliente.');
            location.assign('../views/index.php');
            </script>";
    }
} else {
    echo "<script language='JavaScript'>
        alert('No se especificó un cliente para eliminar.');
        location.assign('../views/index.php');
        </script>";
}
?>

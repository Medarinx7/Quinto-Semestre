<?php
// Conectar a la base de datos
include "db.php";

// Obtener todos los registros de la tabla `clientes`
$query = "SELECT * FROM clientes";
$resultado = mysqli_query($conexion, $query);

// Verificar si hay resultados
if (mysqli_num_rows($resultado) > 0) {
    while ($fila = mysqli_fetch_assoc($resultado)) {
        echo "<tr>";
        echo "<td>" . $fila['id'] . "</td>";
        echo "<td>" . $fila['nombre'] . "</td>";
        echo "<td>" . $fila['apellidos'] . "</td>";
        echo "<td>
            <a href='../includes/eliminar.php?id=" . $fila['id'] . "' class='btn btn-danger'>Eliminar</a>
            </td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='4'>No se encontraron clientes registrados</td></tr>";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar Registros</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/styles.css">
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-light bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php"><img src="https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM.png" alt="" width="50"></a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-lg-auto">
                    <li class="nav-item"><a class="nav-link" href="index.php">Inicio</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Archivo</th>
                    <th>Descargar</th>
                </tr>
            </thead>
            <tbody>
                <?php
                require_once "../includes/db.php";
                $consulta = mysqli_query($conexion, "SELECT * FROM documento");
                while ($fila = mysqli_fetch_assoc($consulta)):
                ?>
                    <tr>
                        <td><?php echo $fila['id']; ?></td>
                        <td><?php echo $fila['nombre']; ?></td>
                        <td><?php echo $fila['descripcion']; ?></td>
                        <td><?php echo $fila['archivo']; ?></td>
                        <td>
                            <a href="../includes/download.php?id=<?php echo $fila['id']; ?>" class="btn btn-primary">
                                <i class="fas fa-download"></i></a>
                        </td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </div>

    <footer>
        <p>&copy; 2024 Gimnasio</p>
    </footer>

    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
</body>

</html>

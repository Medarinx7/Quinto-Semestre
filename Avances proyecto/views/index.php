<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Gestión de Gimnasio</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <script src="../js/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-light bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">
                <img src="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png" alt="" width="50">
            </a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-lg-auto">
                    <li class="nav-item"><a class="nav-link text-white" href="index.php">Inicio</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <h2 class="text-center">Registro de Clientes</h2>
        
        <button class="btn btn-primary" data-toggle="modal" data-target="#agregar">Agregar Cliente</button>
        
        <div class="row mt-3">
            <div class="col-md-6">
                <h4>Clientes Registrados</h4>
                <table class="table table-bordered" id="dataTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php include "../includes/mostrar.php"; ?>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">

            <h4>Notificaciones para Entrenadores</h4>
    <ul class="list-group">
        <?php
        $entrenador_id = 1; // Cambiar según el entrenador logueado
        $notificaciones = mysqli_query($conexion, "SELECT * FROM notificaciones WHERE entrenador_id = $entrenador_id");
        while ($notificacion = mysqli_fetch_assoc($notificaciones)):
        ?>
        <li class="list-group-item"><?php echo $notificacion['mensaje']; ?></li>
        <?php endwhile; ?>
    </ul>
</div>

            <div class="col-md-6">
                <h4>Notificaciones para Entrenadores</h4>
                <ul class="list-group">
                    <?php
                    $entrenador_id = 1; // Cambiar según el entrenador logueado
                    $notificaciones = mysqli_query($conexion, "SELECT * FROM notificaciones WHERE entrenador_id = $entrenador_id");
                    while ($notificacion = mysqli_fetch_assoc($notificaciones)):
                    ?>
                    <li class="list-group-item"><?php echo $notificacion['mensaje']; ?></li>
                    <?php endwhile; ?>
                </ul>
            </div>
        </div>
    </div>

    <?php include "agregar.php"; ?>
</body>
</html>

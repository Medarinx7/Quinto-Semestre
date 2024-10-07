from django.db import models
from django.conf import settings

class Registro(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    detalles = models.TextField()  # Puedes usar este campo para almacenar información adicional

    def __str__(self):
        return f"Registro de {self.usuario.email} en {self.fecha_registro}"

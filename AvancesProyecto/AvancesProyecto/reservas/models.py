from django.db import models
from django.conf import settings

class Clase(models.Model):
    nombre = models.CharField(max_length=100)
    duracion = models.IntegerField()  # Duración en minutos

class Reserva(models.Model):
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    clase = models.ForeignKey(Clase, on_delete=models.CASCADE)
    fecha_reserva = models.DateTimeField(auto_now_add=True)

from django.db import models

# Create your models here.

class Instructor(models.Model):
    nombre = models.CharField(max_length=100)
    experiencia = models.IntegerField()  # Años de experiencia
    especialidad = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

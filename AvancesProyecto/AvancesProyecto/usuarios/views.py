from django.shortcuts import render

# Create your views here.
# usuarios/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import User

@api_view(['POST'])
def registrar_usuario(request):
    email = request.data['email']
    nombre = request.data['nombre']
    password = request.data['password']
    
    usuario = User.objects.create_user(email=email, nombre=nombre, password=password)
    usuario.save()
    
    return Response({'mensaje': 'Usuario registrado correctamente'})

@api_view(['POST'])
def login_usuario(request):
    email = request.data['email']
    password = request.data['password']
    
    usuario = authenticate(email=email, password=password)
    
    if usuario is not None:
        refresh = RefreshToken.for_user(usuario)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({'error': 'Credenciales inválidas'}, status=400)

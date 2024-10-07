"""
URL configuration for AvancesProyecto project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from reservas.views import ReservaViewSet
from instructores.views import InstructorViewSet
from subscriptions.views import SubscriptionViewSet
from usuarios.views import registrar_usuario  # Cambiado de RegisterView a registrar_usuario

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Configurar el enrutador de Django REST Framework
router = DefaultRouter()
router.register(r'reservas', ReservaViewSet)
router.register(r'instructores', InstructorViewSet)
router.register(r'subscriptions', SubscriptionViewSet)

# Definir las rutas de la aplicación
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('usuarios/register/', registrar_usuario, name='register'),  # Ruta para registro de usuarios
]

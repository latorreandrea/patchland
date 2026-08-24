"""HTML routes for the `home` app."""
from django.urls import path

from . import views

app_name = 'home'

urlpatterns = [
    path('manifesto/', views.manifesto, name='manifesto'),
    path('map/', views.map, name='map'),
    path('passport/', views.passport, name='passport'),
    path('profile/', views.profile, name='profile'),
    path('register/', views.register, name='register'),
    path('', views.index, name='index'),
    path('healthz/', views.healthz, name='healthz'),
]

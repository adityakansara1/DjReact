from django.urls import path
from urllib import request
from . import views

urlpatterns = [
    path('', views.index)
]
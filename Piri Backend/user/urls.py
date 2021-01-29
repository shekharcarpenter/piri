from django.urls import path, include
from . import views

urlpatterns = [
    path('register', views.UserAPIView.as_view()),
]
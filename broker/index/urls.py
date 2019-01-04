from django.urls import path
from . import views
app_name = 'index'


urlpatterns = [
    path('', views.index, name='index'),
    path('payeer_707806542.txt', views.payeer, name='payeer'),
]

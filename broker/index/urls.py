from django.urls import path
from . import views
app_name = 'index'


urlpatterns = [
    path('', views.index, name='index'),
    path('payeer_707806542.txt', views.payeer, name='payeer'),
    path('success', views.success, name='success'),
    path('fail', views.fail, name='fail'),
    path('status', views.status, name='status'),
]

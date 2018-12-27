from django.shortcuts import render

# Create your views here.

contexto = {}

# ------------->> DASHBOARD <<-------------
def index(request):
    return render(request, 'index/index.html', contexto)

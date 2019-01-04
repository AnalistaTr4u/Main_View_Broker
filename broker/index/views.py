from django.shortcuts import render

# Create your views here.

contexto = {}

# ------------->> DASHBOARD <<-------------
def index(request):
    return render(request, 'index/index.html', contexto)


# ------------->> PAYEER <<-------------
def payeer(request):
    return render(request, 'index/payeer_707806542.txt', contexto)

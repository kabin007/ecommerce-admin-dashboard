from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'index.html')

def sales(request):
    return render(request,'sale.html')

def order(request):
    return render(request,'orders.html')

def products(request):
    return render(request,'product.html')

def customer(request):
    return render(request,'customers.html')
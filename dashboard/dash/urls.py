from django.urls import path
from . import views


urlpatterns=[
    path('',views.home,name="home"),
    path('sales/',views.sales,name="sales"),
    path('order/',views.order,name="order"),
    path('product/',views.products,name="products"),
    path('customer/',views.customer,name="customer"),
]
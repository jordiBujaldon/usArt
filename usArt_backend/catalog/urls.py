from django.urls import path
from .views import ItemDetail
from catalog import views



urlpatterns = [
    path('', views.item_list),
    path('<int:pk>', ItemDetail.as_view())
]
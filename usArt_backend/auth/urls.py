import email
from django.urls import path
from auth import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('log_in/<username>&<password>', views.log_in)
]
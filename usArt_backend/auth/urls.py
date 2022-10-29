import email
from django.urls import path
from auth import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('register/<email>&<username>&<password>', csrf_exempt(views.register), name = 'register')
]
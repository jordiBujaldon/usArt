from cmath import log
from email import message
from http.client import HTTPResponse
from django.http import JsonResponse
from catalog.models import Item
from catalog.serializers import ItemSerializer
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token

# Create your views here.
def register(request, email, username, password):
    
    if (request.method == 'GET'):
        return JsonResponse({'resposta': 'funciona'})
    elif (request.method == 'POST'):
        # django auth hash password itself
        
        user = User.objects.create_user(username=username, email=email, password=password)
        if user != None:
            print("\njakljfajl\n", username)
            print("\n")
            return JsonResponse({"username": username}, safe=False)
        else:
            pass        
       
    elif (request.method == 'PUT'):
        pass
    elif (request.method == 'DELETE'):
        pass
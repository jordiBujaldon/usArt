from django.http import JsonResponse
from catalog.models import Item
from catalog.serializers import ItemSerializer
from rest_framework.parsers import JSONParser
from django.contrib import messages
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate,login
from django.contrib.auth.decorators import login_required

def log_in(request,username,password):
    isloged = False
    if (request.method == 'GET'):
        try:
            user1 = User.objects.get(username=username)
            if user1.check_password(password):# hash por defecto de django
                #token = Token.objects.create(username=username)
                login(request=request,user=user1)
                isloged= user1.is_authenticated
                print(isloged)
                return JsonResponse({"respuesta": "login correcto", "Isloged": isloged})
            #token que devuelva que la sesion de este usuario este iniciada
            else:
                return JsonResponse({"respuesta": "El usuario o la contaseña son incorrectos"})
        except:
            
            return JsonResponse({"respuesta": "El usuario no existe"})
            
@login_required               
def prova(request,username):
    user1 = User.objects.get(username=username)
    if user1.is_authenticated:
        return JsonResponse({"respuesta": "true"})
        
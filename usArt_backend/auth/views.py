from django.http import JsonResponse
from catalog.models import Item
from catalog.serializers import ItemSerializer
from rest_framework.parsers import JSONParser
from django.contrib import messages
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate,login

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
            
        
        
        
        # comprovar que l'usuari existeix a la base de dades
        # si existeix return "Login correcte"
        # Si fallo en contra retornar usuario o contaseña erroneo"
        # si no return "Usuari no Registrat"
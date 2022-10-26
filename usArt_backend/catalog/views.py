from django.http import JsonResponse
from catalog.models import Item
from catalog.serializers import ItemSerializer, ItemSerializer2
from rest_framework.parsers import JSONParser
from rest_framework import generics


# Create your views here.
def item_list(request):
    if (request.method == 'GET'):
        # Agafem la llista de DB
        items = Item.objects.all()
        # La convertim a diccionari
        serializer = ItemSerializer(items, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif (request.method == 'POST'):
        pass

    elif (request.method == 'PUT'):
        pass

    elif (request.method == 'DELETE'):
        pass


class ItemDetail(generics.RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer2
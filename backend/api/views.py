from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


@api_view(['GET'])
def publico(request):
    return Response({'mensaje': 'acceso publico'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def privado(request):
    return Response({'mensaje': 'acceso privado'})
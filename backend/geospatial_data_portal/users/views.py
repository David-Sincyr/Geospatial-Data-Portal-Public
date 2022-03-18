from django.shortcuts import render
from rest_auth.views import LoginView, LogoutView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Users
from .serializers import *

# Create your views here.
class APILogoutView(LogoutView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class APILoginView(LoginView):
    pass


@api_view(["GET", "POST"])
def users_list(request):
    if request.method == "GET":
        data = Users.objects.all()

        serializer = UserSerializer(data, context={"request": request}, many=True)

        return Response(serializer.data)


@api_view(["PUT", "DELETE"])
def users_detail(request, pk):
    try:
        student = Users.objects.get(pk=pk)
    except Users.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "PUT":
        serializer = UserSerializer(
            Users, data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        Users.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

from rest_framework import generics, status
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserRegistrationSerializer, ChangePasswordSerializer, UpdateUserSerializer
from .models import User


class UserRegistrationView(CreateAPIView):
    '''
        This handles the registration request
        Requires an email, two identical passwords > 8 chars,
        a unique username, first name and last name
    '''
    serializer_class = UserRegistrationSerializer
    permission_classes = (AllowAny,)
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = {
            'success' : 'True',
            'status code' : status.HTTP_200_OK,
            'message': 'User registered  successfully',
            }
        status_code = status.HTTP_200_OK
        return Response(response, status=status_code)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    '''
        This handles a logout request and blacklists a token
        requires an active token
    '''

    def post(self, request):
        try:
            token = RefreshToken(request.data.get('refresh'))
            token.blacklist()

            status_code = status.HTTP_205_RESET_CONTENT
            response = {
                'success' : True,
                'status code' : status_code,
                'message': 'User was logged out successfully'
                }

            return Response(response, status=status_code)

        except Exception as e:
            status_code = status.HTTP_400_BAD_REQUEST
            response = {
                'success' : False,
                'status code' : status_code,
                'message': 'User was not logged out successfully'
                }
            return Response(response, status=status_code)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserRegistrationSerializer


class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer


class UpdateProfileView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = UpdateUserSerializer
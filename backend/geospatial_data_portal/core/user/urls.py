from django.urls import path
from .views import UserRegistrationView, ChangePasswordView, UpdateProfileView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from django.urls import path

#these contain the various URLS that are invoked from the frontend
urlpatterns = [
    path('signup/', UserRegistrationView.as_view(), name='signup'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('change_password/<int:pk>/', ChangePasswordView.as_view(), name='change_password'),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view(), name='update_profile'),
    path('logout/', LogoutView.as_view(), name='logout'),
    ]
  
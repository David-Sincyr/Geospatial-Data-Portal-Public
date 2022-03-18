from django.urls import path, include

from users.views import APILoginView, APILogoutView

urlpatterns = [
    path("login/", APILoginView.as_view(), name="api_login"),
    path("logout/", APILogoutView.as_view(), name="api_logout"),
]

from django.urls import path
from core.profile.views import UserProfileView

#This is the URL to be able to display, get, post to a profile
urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='profile'),
    ]
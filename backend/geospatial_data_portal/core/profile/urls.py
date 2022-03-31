from django.urls import path
from core.profile.views import UserProfileView

urlpatterns = [
    path("profile/", UserProfileView.as_view(), name="profile"),
]

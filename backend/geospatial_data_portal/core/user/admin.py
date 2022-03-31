from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from core.profile.models import UserProfile
from rest_framework_simplejwt.token_blacklist import models
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin


class CustomUserAdmin(admin.ModelAdmin):
    """This displays user information to the admin under the CORE_USER -> Users menu option.
    To add more information, add it to the list_display."""

    list_display = ("id", "email", "username", "is_staff", "is_superuser")


class CustomProfileAdmin(admin.ModelAdmin):
    """This displays profile information to the admin under the PROFILE -> User Profile menu option.
    To add more information, add it to the list_display."""

    list_display = ("user_id", "username", "first_name", "last_name", "projects")


class NewOutstandingTokenAdmin(OutstandingTokenAdmin):
    """This allows an admin to be able to delete a user even if they have a currently active token."""

    def has_delete_permission(self, *args, **kwargs):
        """Checks if user has permission to delete outstanding tokens."""
        return True


# This section registers the above funtions to the admin site.
# The form to register a new model is as follows:
# NOTE: admin.site.register(MODEL OR ITERABLE, and ADMIN CLASS TO USE)
admin.site.unregister(models.OutstandingToken)
admin.site.register(models.OutstandingToken, NewOutstandingTokenAdmin)
admin.site.register(User, CustomUserAdmin)
admin.site.register(UserProfile, CustomProfileAdmin)

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from core.profile.models import UserProfile
from rest_framework_simplejwt.token_blacklist import models
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin


'''
    This displays user information to the admin under the CORE_USER -> Users
    menu option. To add more information, add it to the list_display
'''
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id','email', 'username', 'is_active','is_staff', 'is_superuser')

'''
    This displays profile information to the admin under the PROFILE -> User Profile
    menu option. To add more information, add it to the list_display
'''
class CustomProfileAdmin(admin.ModelAdmin):
    list_display = ('user_id','username', 'first_name', 'last_name', 'projects')

'''
    This allows an admin to be able to delete a user even if they have a
    currently active token
'''
class NewOutstandingTokenAdmin(OutstandingTokenAdmin):
    def has_delete_permission(self, *args, **kwargs):
        return True

'''
    This section registers the above funtions to the admin site.
    The form to register a new model is as follows:
    NOTE: admin.site.register(MODEL OR ITERABLE, and ADMIN CLASS TO USE)
'''
admin.site.unregister(models.OutstandingToken)
admin.site.register(models.OutstandingToken, NewOutstandingTokenAdmin)
admin.site.register(User,CustomUserAdmin)
admin.site.register(UserProfile,CustomProfileAdmin)
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from core.profile.models import UserProfile
from rest_framework_simplejwt.token_blacklist import models
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin


class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id','email', 'username', 'is_staff', 'is_superuser')

class CustomProfileAdmin(admin.ModelAdmin):
    list_display = ('user_id','username', 'first_name', 'last_name', 'projects')


class NewOutstandingTokenAdmin(OutstandingTokenAdmin):

    def has_delete_permission(self, *args, **kwargs):
        return True


admin.site.unregister(models.OutstandingToken)
admin.site.register(models.OutstandingToken, NewOutstandingTokenAdmin)
admin.site.register(User,CustomUserAdmin)
admin.site.register(UserProfile,CustomProfileAdmin)
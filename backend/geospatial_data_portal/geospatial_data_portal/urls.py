from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.user.urls')),
    path('api/', include('core.profile.urls')),
]

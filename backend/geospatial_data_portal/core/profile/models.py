import uuid
from django.db import models
from core.user.models import User

class UserProfile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    first_name = models.CharField(max_length=50, unique=False)
    last_name = models.CharField(max_length=50, unique=False)
    projects = models.FileField(max_length=80, blank=True)

    class Meta:
        # sets the table name as profile
        db_table = "profile"
from django.db import models
from django.conf import settings
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):
    """
    Parent class for creating a regular user and a super user (admin)
    This function is only called when sub functions are invoked.
    Data is saved to the database and a user object is returned.
    """

    def _create_user(self, email, password, username, is_staff, is_superuser, **kwargs):

        if email is None:
            raise TypeError("Users must have an email.")
        if password is None:
            raise TypeError("Users must have a password")

        user = self.model(
            email=self.normalize_email(email),
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, username, **extra_fields):
        """
        This function is for a normal user. It passes the information to
        the parent function and the user object returned from the parent
        function in then returned to the create function in serializer.py
        file, line 36.
        """
        return self._create_user(
            email, password, username, False, False, **extra_fields
        )

    def create_superuser(self, email, password, username, **extra_fields):
        """
        This function is for a super-user (admin). Can not be invoked through
        the frontend portion of the application.
        """
        return self._create_user(email, password, username, True, True, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    """
    This is the base model that is used to setup the data and thier types
    for a user. It sets the specified fields (username/email) so that they
    are more easily invoked.
    """

    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_manager = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now_add=True)
    # last_logout = models.DateTimeField(null=True, blank=True)

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"

    # Required fields only pertain to an admin (super) user
    REQUIRED_FIELDS = ["email"]

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"

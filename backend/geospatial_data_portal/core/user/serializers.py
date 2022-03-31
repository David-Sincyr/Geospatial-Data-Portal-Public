from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from core.profile.models import UserProfile
from .models import User
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    """This sets up the profile data to be users for a user."""

    class Meta:
        model = UserProfile
        fields = ("first_name", "last_name")


class UserRegistrationSerializer(serializers.ModelSerializer):
    """This allows for a user to be able to register.."""

    profile = UserSerializer(required=False)

    # The email fields is required and must be unique
    # UniqueValidator validates that there is no existing email
    email = serializers.EmailField(
        required=True, validators=[UniqueValidator(queryset=User.objects.all())]
    )

    # password fields are required, can only be written and uses built in validators
    # which can be found here:
    # https://docs.djangoproject.com/en/2.2/_modules/django/contrib/auth/password_validation/
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        """Sets up the Meta class with the required fields listed in "fields" list."""

        model = User
        fields = ("email", "password", "password2", "username", "profile")
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"password": "Passwords didn't match."})
        return attrs

    def create(self, validated_data):
        """
        This creates a user by taking in the users data.
        User.objects.create_user sends the users data to the create_user function
        and a user object is returned.
        Once the user is created, then all the information is used to create a profile
        with the added fields email, first/last and username. A user object is returned.
        """
        profile_data = validated_data.pop("profile")
        user = User.objects.create_user(**validated_data)
        UserProfile.objects.create(
            user=user,
            username=user.username,
            email=user.email,
            first_name=profile_data["first_name"],
            last_name=profile_data["last_name"],
        )
        return user


class ChangePasswordSerializer(serializers.ModelSerializer):
    """This handles password request changes."""

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("old_password", "password", "password2")

    def validate(self, attrs):
        """Validates if the new password matches."""
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return attrs

    def validate_old_password(self, value):
        """Validates the old password."""
        user = self.context["request"].user
        if not user.check_password(value):
            raise serializers.ValidationError(
                {"old_password": "Old password is not correct"}
            )
        return value

    def update(self, instance, validated_data):
        """Updates the users password if old password is valid and new password matches."""
        user = self.context["request"].user

        if user.pk != instance.pk:
            raise serializers.ValidationError(
                {"authorize": "You dont have permission for this user."}
            )

        instance.set_password(validated_data["password"])
        instance.save()

        return instance


class UpdateUserSerializer(serializers.ModelSerializer):
    """This handles updating user information."""

    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email")
        extra_kwargs = {
            "first_name": {"required": True},
            "last_name": {"required": True},
        }

    def validate_email(self, value):
        """Validates the new email."""
        user = self.context["request"].user
        if User.objects.exclude(pk=user.pk).filter(email=value).exists():
            raise serializers.ValidationError(
                {"email": "This email is already in use."}
            )
        return value

    def validate_username(self, value):
        """Validates the new username."""
        user = self.context["request"].user
        if User.objects.exclude(pk=user.pk).filter(username=value).exists():
            raise serializers.ValidationError(
                {"username": "This username is already in use."}
            )
        return value

    def update(self, instance, validated_data):
        """If supplied information is valid and user is authorized then the users info is updated."""
        user = self.context["request"].user
        if user.pk != instance.pk:
            raise serializers.ValidationError(
                {"authorize": "You dont have permission for this user."}
            )
        instance.first_name = validated_data["first_name"]
        instance.last_name = validated_data["last_name"]
        instance.email = validated_data["email"]
        instance.username = validated_data["username"]
        instance.save()
        return instance

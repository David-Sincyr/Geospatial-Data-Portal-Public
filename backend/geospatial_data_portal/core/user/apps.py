from django.apps import AppConfig


class UserConfig(AppConfig):
    """Application configuration objects store metadata for an application.
    Some attributes can be configured in AppConfig subclasses. (name or label)
    Others are set by Django and read-only."""

    name = "core.user"
    label = "core_user"


class AuthConfig(AppConfig):
    name = "auth"

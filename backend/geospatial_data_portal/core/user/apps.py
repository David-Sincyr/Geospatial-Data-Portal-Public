from django.apps import AppConfig


class UserConfig(AppConfig):
    name = 'core.user'
    label = 'core_user'

class AuthConfig(AppConfig):
    name = 'auth'
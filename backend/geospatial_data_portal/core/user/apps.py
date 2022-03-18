from django.apps import AppConfig

'''
Application configuration objects store metadata for an application. 
Some attributes can be configured in AppConfig subclasses. (name or label)
Others are set by Django and read-only.
'''
class UserConfig(AppConfig):
    name = 'core.user'
    label = 'core_user'

class AuthConfig(AppConfig):
    name = 'auth'
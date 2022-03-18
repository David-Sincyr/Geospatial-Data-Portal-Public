from rest_framework import serializers
from .models import GSDFile


class GSDFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = GSDFile
        fields = "__all__"

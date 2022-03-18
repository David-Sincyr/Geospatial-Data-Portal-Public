from rest_framework import viewsets, parsers
from .models import GSDFile
from .serializers import GSDFileSerializer


class GSDFileViewset(viewsets.ModelViewSet):
    queryset = GSDFile.objects.all()
    serializer_class = GSDFileSerializer
    parser_classes = [parsers.MultiPartParser, parsers.FormParser]
    http_method_names = ["get", "post", "patch", "delete"]

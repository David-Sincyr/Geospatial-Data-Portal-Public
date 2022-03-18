from rest_framework.routers import SimpleRouter
from .views import GSDFileViewset

router = SimpleRouter()
router.register("upload", GSDFileViewset)

urlpatterns = router.urls

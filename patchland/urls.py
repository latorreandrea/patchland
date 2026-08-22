"""URL configuration for the Patchland project.

Routes are centralised here:
  - /admin/   Django admin
  - /api/     Django Ninja API (all routers live under /api/)
  - /         HTML template routes (app `home`)
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from patchland.api import api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),           # -> /api/home/stats, /api/docs, ...
    path('', include('home.urls')),   # HTML template views
]

if settings.DEBUG:
    # Serve uploaded media files during local development only.
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

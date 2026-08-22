"""Global Django Ninja API instance for Patchland.

Every app exposes its own router (see `home/api.py`) and is mounted here
under a shared `/api/` prefix (see `patchland/urls.py`).
"""
from ninja import NinjaAPI

from home.api import router as home_router

api = NinjaAPI(
    title="Patchland API",
    version="0.1.0",
    description="Public API of the distributed symbolic nation 'Res Publica Mundi'.",
    # Relative to the /api/ mount -> served at /api/docs and /api/openapi.json.
    docs_url="docs",
    openapi_url="openapi.json",
)

api.add_router("home/", home_router, tags=["home"])

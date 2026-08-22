"""Django Ninja router for the `home` app."""
from ninja import Router, Schema

from .services import get_nation_stats

router = Router()


class NationStatsOut(Schema):
    """Aggregated nation statistics returned by the API."""

    total_area_m2: int
    total_patches: int
    custodians: int
    provinces: int
    countries: int
    seals: int
    passports: int


@router.get(
    '/stats',
    response=NationStatsOut,
    summary='Nation statistics',
    description='Total area, custodians, provinces and other Patchland metrics.',
)
def nation_stats(request):
    """GET /api/home/stats — simulated nation statistics."""
    return get_nation_stats()

"""Domain logic for the `home` app: nation statistics.

In this first version (v0.1) the values are simulated placeholders. They will
be replaced by real aggregations from the PostgreSQL database once the
Patch / Custodian / Province models are introduced (v0.2).
"""

# Simulated statistics — will come from PostgreSQL models later.
NATION_STATS = {
    'total_area_m2': 128_450,
    'total_patches': 84,
    'custodians': 76,
    'provinces': 12,
    'countries': 9,
    'seals': 84,
    'passports': 213,
}


def get_nation_stats() -> dict:
    """Return the current nation statistics."""
    # TODO(v0.2): aggregate real values from the ORM, e.g.
    #   Patch.objects.aggregate(total=Sum('area_m2'))
    return dict(NATION_STATS)

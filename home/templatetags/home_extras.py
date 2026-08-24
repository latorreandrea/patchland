"""Custom template filters for the `home` app."""
from decimal import Decimal, ROUND_HALF_UP

from django import template

register = template.Library()


@register.filter
def compact_int(value):
    """Format a number with a compact suffix (K/M).

    Mirrors JavaScript's ``Intl.NumberFormat('en-US', {
    notation: 'compact', maximumFractionDigits: 1 })`` so the
    server-rendered value matches the live update performed by
    ``home/static/home/js/stats.js`` (no visual "jump" on page load).

    Examples:
        84        -> '84'
        128_450   -> '128.5K'
        1_450_000 -> '1.5M'
    """
    try:
        number = Decimal(str(value))
    except (TypeError, ValueError):
        return value

    abs_number = abs(number)
    if abs_number >= Decimal('1000000'):
        divisor, suffix = Decimal('1000000'), 'M'
    elif abs_number >= Decimal('1000'):
        divisor, suffix = Decimal('1000'), 'K'
    else:
        return f'{number:.1f}'.rstrip('0').rstrip('.')

    scaled = (number / divisor).quantize(Decimal('0.1'), rounding=ROUND_HALF_UP)
    return f'{scaled:.1f}'.rstrip('0').rstrip('.') + suffix

"""HTML views for the `home` app."""
from django.http import JsonResponse
from django.shortcuts import render

from .services import get_nation_stats


def index(request):
    """Landing page of Patchland (Res Publica Mundi)."""
    return render(request, 'home/index.html', {'stats': get_nation_stats()})


def healthz(request):
    """Readiness probe for the hosting platform."""
    return JsonResponse({'status': 'ok', 'service': 'patchland'})


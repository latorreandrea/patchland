"""HTML views for the `home` app."""
from django.http import JsonResponse
from django.shortcuts import render

from .services import get_nation_stats


def index(request):
    """Landing page of Patchland (Res Publica Mundi)."""
    return render(request, 'home/index.html', {'stats': get_nation_stats(), 'active_nav': 'home'})


def manifesto(request):
    """The Patchland Manifesto (Res Publica Mundi)."""
    return render(request, 'home/manifesto.html', {'active_nav': 'home'})


def map(request):
    """World map of registered Patches."""
    return render(request, 'home/map.html', {'stats': get_nation_stats(), 'active_nav': 'map'})


def passport(request):
    """The Patchland Passport and seal archive."""
    return render(request, 'home/passport.html', {'active_nav': 'passport'})


def profile(request):
    """Citizen profile."""
    return render(request, 'home/profile.html', {'active_nav': 'profile'})


def register(request):
    """Register a new Patch."""
    return render(request, 'home/register.html', {'active_nav': 'register'})


def healthz(request):
    """Readiness probe for the hosting platform."""
    return JsonResponse({'status': 'ok', 'service': 'patchland'})


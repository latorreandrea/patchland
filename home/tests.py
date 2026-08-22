"""Smoke tests for the `home` app."""
from django.test import TestCase
from django.urls import reverse


class HomePageTests(TestCase):
    def test_index_returns_200(self):
        response = self.client.get(reverse('home:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Res Publica Mundi')

    def test_healthz_returns_ok(self):
        response = self.client.get(reverse('home:healthz'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'status': 'ok', 'service': 'patchland'})


class StatsApiTests(TestCase):
    def test_stats_returns_expected_fields(self):
        response = self.client.get('/api/home/stats')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        for field in ('total_area_m2', 'custodians', 'provinces'):
            self.assertIn(field, data)


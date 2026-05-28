import django_filters
from .models import Observation

class ObservationFilter(django_filters.FilterSet):
    class Meta:
        model = Observation
        fields = ['equipment']
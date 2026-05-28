from rest_framework import viewsets
from .models import Equipment, Observation
from .serializers import EquipmentSerializer, ObservationSerializer
from .filters import ObservationFilter
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class EquipmentViewSet(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

class ObservationViewSet(viewsets.ModelViewSet):
    queryset = Observation.objects.all()
    serializer_class = ObservationSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ObservationFilter
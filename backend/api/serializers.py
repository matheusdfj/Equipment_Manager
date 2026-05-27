from rest_framework import serializers
from .models import Equipment, Observation

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'

class ObservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Observation
        fields = '__all__'
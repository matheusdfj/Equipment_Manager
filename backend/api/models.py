from django.db import models

# Create your models here.
class Equipment(models.Model):

    name = models.CharField(max_length=50)
    part_number = models.TextField(max_length=8)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    image_url = models.TextField()
    description = models.TextField()
    quantity = models.IntegerField()

class Observation(models.Model):

    createdon = models.DateTimeField(auto_now_add=True)
    content = models.TextField(max_length=200)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, related_name="observations")


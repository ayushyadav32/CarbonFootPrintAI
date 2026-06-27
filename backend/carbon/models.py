from django.db import models
from django.contrib.auth.models import User


class CarbonRecord(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="carbon_records"
    )

    travel = models.FloatField()
    electricity = models.FloatField()

    diet = models.CharField(
        max_length=50,
        default="Vegetarian"
    )

    waste = models.FloatField(default=0)
    water = models.FloatField(default=0)

    carbon_score = models.FloatField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.carbon_score} kg CO₂"
from django.db import models

class CarbonRecord(models.Model):
    travel = models.FloatField()
    electricity = models.FloatField()
    carbon_score = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.carbon_score} kg CO2"
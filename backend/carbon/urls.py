from django.urls import path
from .views import calculate_carbon, get_records

urlpatterns = [
    path("calculate/", calculate_carbon),
    path("records/", get_records),
]
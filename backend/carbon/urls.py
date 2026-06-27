from django.urls import path
from . import views

urlpatterns = [
    path("calculate/", views.calculate_carbon),
    path("records/", views.get_records),
    path("records/<int:pk>/delete/", views.delete_record),
]
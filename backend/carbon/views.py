from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import CarbonRecord


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def calculate_carbon(request):

    travel = float(request.data.get("travel", 0))
    electricity = float(request.data.get("electricity", 0))
    waste = float(request.data.get("waste", 0))
    water = float(request.data.get("water", 0))
    diet = request.data.get("diet", "Vegetarian")

    if diet == "Vegetarian":
        diet_score = 20
    elif diet == "Mixed":
        diet_score = 40
    else:
        diet_score = 70

    carbon_score = (
        travel * 0.21
        + electricity * 0.5
        + waste * 2
        + water * 0.02
        + diet_score
    )

    CarbonRecord.objects.create(
        user=request.user,
        travel=travel,
        electricity=electricity,
        diet=diet,
        waste=waste,
        water=water,
        carbon_score=round(carbon_score, 2),
    )

    return Response({
        "carbon_score": round(carbon_score, 2),
        "message": "Record Saved Successfully"
    })


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_records(request):

    records = (
        CarbonRecord.objects
        .filter(user=request.user)
        .order_by("-created_at")
    )

    data = []

    for record in records:
        data.append({
            "id": record.id,
            "travel": record.travel,
            "electricity": record.electricity,
            "diet": record.diet,
            "waste": record.waste,
            "water": record.water,
            "carbon_score": record.carbon_score,
            "created_at": record.created_at.strftime("%d %b"),
        })

    return Response(data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_record(request, pk):

    try:
        record = CarbonRecord.objects.get(
            id=pk,
            user=request.user
        )

        record.delete()

        return Response({
            "message": "Record Deleted Successfully"
        })

    except CarbonRecord.DoesNotExist:
        return Response(
            {
                "error": "Record Not Found"
            },
            status=404
        )
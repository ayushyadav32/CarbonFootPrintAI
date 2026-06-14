from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CarbonRecord


@api_view(['POST'])
def calculate_carbon(request):

    travel = float(request.data.get("travel", 0))
    electricity = float(request.data.get("electricity", 0))

    carbon_score = (travel * 0.21) + (electricity * 0.5)

    CarbonRecord.objects.create(
        travel=travel,
        electricity=electricity,
        carbon_score=carbon_score
    )

    return Response({
        "carbon_score": round(carbon_score, 2)
    })


@api_view(['GET'])
def get_records(request):

    records = CarbonRecord.objects.all().order_by('-created_at')[:10]

    data = []

    for record in records:
        data.append({
            "travel": record.travel,
            "electricity": record.electricity,
            "carbon_score": record.carbon_score,
            "created_at": record.created_at
        })

    return Response(data)
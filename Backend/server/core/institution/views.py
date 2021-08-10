from rest_framework import viewsets

from .serializers import SalarySerializer
from .models import Salary


class SalaryViewSet(viewsets.ModelViewSet):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer

from rest_framework import serializers

from .models import Salary


class SalarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Salary
        fields = ('id', 'cip', 'degree_type_id', 'median_salary',
                  'num_observations', 'school_id')

from django.db import models


class Salary(models.Model):
    cip = models.FloatField()
    degree_type_id = models.IntegerField()
    median_salary = models.FloatField()
    num_observations = models.IntegerField(null=True)
    school_id = models.IntegerField()

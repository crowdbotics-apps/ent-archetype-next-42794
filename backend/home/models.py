from django.conf import settings
from django.db import models
class Customer(models.Model):
    'Generated Model'
    customer_id = models.BigIntegerField()
    name = models.TextField(null=True,blank=True,)
    contact_information = models.TextField(null=True,blank=True,)
    debt = models.BigIntegerField(null=True,blank=True,)

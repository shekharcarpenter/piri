from django.db import models
from . import constants


class User(models.Model):
    full_name = models.CharField(max_length=50, help_text="Please separate full name with space.", verbose_name="Full name")
    email = models.EmailField(verbose_name="E-Mail")
    phone = models.CharField(help_text="Phone number not more than 15 digits", validators=[constants.phone_regex], max_length=15, verbose_name="Phone Number", blank=False)
    address = models.TextField(verbose_name="Address")

    def __str__(self):
        return self.full_name


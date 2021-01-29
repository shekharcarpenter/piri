from django.contrib import admin
from .models import User
# Register your models here.

class MyUserAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email']

admin.site.register(User, MyUserAdmin)
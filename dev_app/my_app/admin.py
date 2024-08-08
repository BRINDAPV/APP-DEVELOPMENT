from django.contrib import admin
from .models import Users, Person, Profile
# Register your models here.
@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ('email','password')
    search_fields = ('email',)

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    search_fields = ('first_name', 'last_name')

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'address')
    search_fields = ('name', 'email', 'phone_number')
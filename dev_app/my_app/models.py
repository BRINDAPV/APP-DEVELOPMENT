from django.db import models

# Create your models here.
class Users(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    

class Person(models.Model):
     first_name = models.CharField(max_length=98)
     last_name = models.CharField(max_length=32)
     
class Profile(models.Model):
    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)
    name = models.CharField(max_length=98)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=450)

    def __str__(self):
        return self.name
    
class Toys(models.Model):
    toy_name = models.CharField(max_length=98)
    toy_image = models.URLField()
    toy_price = models.DecimalField(max_digits=10, decimal_places=2)

class Carts(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()

    def _str_(self):
        return self.name
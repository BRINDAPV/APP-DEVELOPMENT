from rest_framework import serializers
from .models import Users, Person, Profile, Toys, Carts

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'  
   
class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'  # Use double underscores
        
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'  # Use double underscores

class ToysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Toys
        fields = ['id', 'toy_name', 'toy_image', 'toy_price']
        
class CartsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carts
        fields = '_all_'
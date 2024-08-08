from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.contrib.auth import authenticate
from .models import Users, Person , Profile
from .serializers import UsersSerializer, PersonSerializer, ProfileSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

    @action(detail=False, methods=['post'])
    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = Users.objects.get(email=email)
        except Users.DoesNotExist:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

        # Replace authenticate method with custom check
        if user.password == password:
            serializer = self.get_serializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
    
    def create(self, request, *args, **kwargs):
        # Custom logic for creating a new user can go here
        return super().create(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        # Custom logic for listing users can go here
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        # Custom logic for retrieving a single user can go here
        return super().retrieve(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        # Custom logic for updating a user can go here
        return super().update(request, *args, **kwargs)

    def partial_update(self, request, *args, **kwargs):
        # Custom logic for partially updating a user can go here
        return super().partial_update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # Custom logic for deleting a user can go here
        response=super().destroy(request, *args, **kwargs)
        print("deleted user")

        return response

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

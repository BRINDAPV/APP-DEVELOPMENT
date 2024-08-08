from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, PersonViewSet, ProfileViewSet  # Import your viewsets

# Initialize the DefaultRouter
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'persons', PersonViewSet)
router.register(r'profile', ProfileViewSet)

# Define URL patterns
urlpatterns = [
    path('', include(router.urls)), 
    # Include the router URLs
    
]

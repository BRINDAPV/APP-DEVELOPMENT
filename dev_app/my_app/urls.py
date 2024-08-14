from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, PersonViewSet, ProfileViewSet, ToysViewSet, CartsViewSet  # Import your viewsets

# Initialize the DefaultRouter
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'persons', PersonViewSet)
router.register(r'profile', ProfileViewSet)
router.register(r'toys',ToysViewSet)
router.register(r'carts',CartsViewSet)


# Define URL patterns
urlpatterns = [
    path('', include(router.urls)), 
    # Include the router URLs
    
]

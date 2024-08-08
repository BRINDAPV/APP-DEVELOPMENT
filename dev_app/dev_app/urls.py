# dev_app/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('my_app.urls')),  # Ensure 'my_app' is the correct app name
]

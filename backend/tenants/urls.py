from django.urls import path
from .views import tenant_signup, tenant_login

urlpatterns = [
    path('signup/', tenant_signup),
    path('login/', tenant_login, name='tenant-login'),
    
]

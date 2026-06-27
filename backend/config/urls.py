from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Carbon APIs
    path('api/', include('carbon.urls')),

    # Accounts APIs
    path('api/accounts/', include('accounts.urls')),

    # JWT Login API
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    # JWT Refresh API
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
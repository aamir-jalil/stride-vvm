from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework import routers
from .views import registration, UserViewSet
from .token import StrideTokenObtainPairView

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', registration, name='register'),
    path('token/', StrideTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

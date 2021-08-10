from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class StrideTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['id'] =user.id
        token['email'] = user.email
        token['username'] = user.username
        return token

class StrideTokenObtainPairView(TokenObtainPairView):
    serializer_class = StrideTokenObtainPairSerializer
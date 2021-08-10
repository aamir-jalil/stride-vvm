from django.contrib.auth.models import AnonymousUser
from django.utils.functional import SimpleLazyObject
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.request import Request


def get_user_jwt(request):
    user = None
    try:
        user_jwt = JWTAuthentication().authenticate(Request(request))
        if user_jwt is not None:
            user = user_jwt[0]
    except:
        pass

    return user or AnonymousUser()


class JWTAuthenticationMiddleware(object):
    def __init__(self, get_response):
        self.get_responese = get_response

    def __call__(self, request):
        response = self.get_responese(request)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        user = SimpleLazyObject(lambda: get_user_jwt(request))
        request.user = user

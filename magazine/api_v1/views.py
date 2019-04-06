from webapp.models import Product, Foto, Category, Order
from api_v1.serializers import ProductSerializer, FotoSerializer, CategorySerializer, OrderSerializer, AuthTokenSerializer
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken, APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'is_admin': user.is_superuser,
            'is_staff': user.is_staff,
            'user_id': user.id,
        })


class TokenloginView(APIView):
    serializer_class = AuthTokenSerializer

    def post(self, request):
        serializer = AuthTokenSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        user = token.user
        return Response({
            'token': token.key,
            'username': user.username,
            'is_admin': user.is_superuser,
            'is_staff': user.is_staff,
            'user_id': user.id,
        })


class BaseViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        permissions = super().get_permissions()
        if self.request.method in ["POST", "DELETE", "PUT", "PATCH"]:
            permissions.append(IsAuthenticated())
        return permissions


class ProductViewSet(BaseViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class FotoViewSet(BaseViewSet):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer


class CategoryViewSet(BaseViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(BaseViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

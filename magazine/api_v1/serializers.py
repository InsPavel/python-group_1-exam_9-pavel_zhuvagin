from rest_framework.exceptions import ValidationError
from rest_framework import serializers
from webapp.models import Product, Photo, Category, Order
from rest_framework.authtoken.models import Token


class InlineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class InlinePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'photo')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'product_photo')


class ProductSerializer(serializers.ModelSerializer):
    categories = InlineCategorySerializer(many=True, read_only=True)
    product_photo = InlinePhotoSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'created_at', 'product_photo', 'categories', 'price')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'user', 'products', 'phone_number', 'adress', 'comment', 'created_at')


class AuthTokenSerializer(serializers.Serializer):
    token = serializers.CharField(write_only=True)

    def validate_token(self, token):
        try:
            return Token.objects.get(key=token)
        except Token.DoesNotExist:
            raise ValidationError("Invalid credentials")

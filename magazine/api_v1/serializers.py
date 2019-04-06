from rest_framework import serializers
from webapp.models import Product, Foto, Category, Order


class InlineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')


class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = ('id', 'product', 'foto')


class ProductSerializer(serializers.ModelSerializer):
    categories = InlineCategorySerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'created_at', 'categories', 'price')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'user', 'products', 'phone_number', 'adress', 'comment', 'created_at')

from django.db import models
from django.conf import settings


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    created_at = models.DateField()
    categories = models.ManyToManyField('Category', related_name='categories', blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name


class Photo(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_photo')
    photo = models.ImageField(upload_to='photos')


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    products = models.ForeignKey(Product, on_delete=models.PROTECT, related_name='products')
    phone_number = models.CharField(max_length=20)
    adress = models.CharField(max_length=255, null=True, blank=True)
    comment = models.TextField(max_length=2000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "User %s products %s" % (self.user, self.products)



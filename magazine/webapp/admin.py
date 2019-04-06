from django.contrib import admin

from webapp.models import Product, Photo, Category, Order

admin.site.register(Product)
admin.site.register(Photo)
admin.site.register(Category)
admin.site.register(Order)

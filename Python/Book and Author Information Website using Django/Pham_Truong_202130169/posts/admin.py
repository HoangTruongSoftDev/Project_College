from django.contrib import admin

# Register your models here.
from .models import Author, BookInstance, Book, Genre


admin.site.register(Author)
admin.site.register(BookInstance)
admin.site.register(Book)
admin.site.register(Genre)

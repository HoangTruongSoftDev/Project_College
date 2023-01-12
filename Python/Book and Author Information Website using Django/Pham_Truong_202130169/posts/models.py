from django.db import models
from django.utils import timezone

# Create your models here.

class Author(models.Model):
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    date_of_birth = models.DateField(default= timezone.now)
    def __str__(self):
        return f'{self.lastName}, {self.firstName}'

class Genre(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.OneToOneField(Author,on_delete = models.CASCADE)
    summary = models.TextField()
    isbn = models.CharField(max_length = 13)
    genre = models.ForeignKey(Genre,on_delete = models.CASCADE)
    def __str__(self):
        return self.title

class BookInstance(models.Model):
    status_list = [('m','Maintenance'),('b','Booked'),('a','Available'),('r','Reserved')]
    book = models.OneToOneField(Book,on_delete = models.CASCADE)
    status = models.CharField(max_length = 9,choices = status_list, default = 'm')
    due_date = models.DateField(default= timezone.now)
    def __str__(self):
        return self.book.title
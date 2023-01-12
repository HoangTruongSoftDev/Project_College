from django.shortcuts import render
from .models import Book, Author, Genre, BookInstance
# Create your views here.
def home(request):
    context={'books':Book.objects.all(), 'title':'Home'}
    return render(request,'mylibrary/index.html',context)

def book(request, **kwargs):
    return render(request,'mylibrary/bookInstance.html',{'bookIns':BookInstance.objects.get(id = kwargs['received_id'])})

def author(request):
    return render(request,'mylibrary/author_list.html',{'authors':Author.objects.all(),'title':'Author'})
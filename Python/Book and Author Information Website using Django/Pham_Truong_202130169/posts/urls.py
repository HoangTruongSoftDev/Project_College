
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.home,name='posts-home'),
    path('book/<int:received_id>/',views.book, name = 'posts-detailBook'),
    path('author/',views.author,name='posts-author'),
]
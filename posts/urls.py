from django.urls import path
from . import views

urlpatterns = [
    # Paths for posts
    path("", views.postsView, name="posts"),
    path("post/<int:id>/", views.postView, name="post"),
    path("post/<int:id>/like/", views.likePost, name="like"),
    path('post/<int:id>/share', views.sharePost, name="share"),
    path('post/<int:id>/comment', views.commentPost, name="comment"),
    path('post/<int:id>/delete', views.deletePost, name="delete"),
    path("create/", views.createPost, name="createPost"),

    # Paths for user
    path("register/", views.registerUser, name="register"),
    path("user/<int:id>/liked", views.likedPosts, name="liked"),
    path("user/<int:id>/commented", views.commentedPosts, name="commented"),
    path("login/", views.loginUser, name="login"),
    path("logout/", views.logoutUser, name="logout"),
]

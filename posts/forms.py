from django.forms import ModelForm 
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Post 

# Post creation form
class PostForm(ModelForm):
    class Meta:
        model = Post 
        fields = ['content']

# User registration form
class UserRegistrationForm(UserCreationForm):
    class Meta: 
        model = User
        fields = ['username', 'email','password1', 'password2']
from django.db import models
from django.contrib.auth.models import User

# Post model
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    content = models.TextField()
    no_of_likes = models.IntegerField(default=0)
    no_of_comments = models.IntegerField(default=0)
    no_of_shares = models.IntegerField(default=0)
    createdAt = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return f'{self.user.username}: {self.content[0:20]}'
    
    
# Likes model
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}: {self.post.id}"
    

# Comment model
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    message = models.CharField(max_length=500)
    createAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.message}"
    

class Share(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}: {self.post.id}"
    
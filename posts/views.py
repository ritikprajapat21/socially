from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

from .forms import PostForm, UserRegistrationForm
from .models import Post, Like, Comment, Share

# View to see all posts
def postsView(request):
    posts = Post.objects.all().order_by('-createdAt')

    context = {'posts': posts}
    return render(request, 'posts/posts.html', context)

# To view a post
def postView(request, id):
    post = Post.objects.get(id=id)

    context = {'post': post}

    if post.no_of_comments > 0:
        comments = Comment.objects.filter(post=post)
        context['comments'] = comments
        
    return render(request, 'posts/post.html', context)

# View to like a post
@login_required(login_url="login")
def likePost(request, id):
    post = Post.objects.get(id=id)
    if request.method == 'POST':
        post.no_of_likes += 1
        post.save()
        user = User.objects.get(username=request.user)
        Like.objects.create(
            user=user,
            post=post
        )
        return redirect('posts')

# Delete comment
@login_required(login_url="login")
def deletePost(request, id):
    post = Post.objects.get(id=id)
    
    post.delete()

    return redirect('posts')

# Share the post
@login_required(login_url="login")
def sharePost(request, id):
    post = Post.objects.get(id=id)
    if request.method == 'POST':
        post.no_of_shares += 1
        post.save()
        user = User.objects.get(username=request.user)
        Share.objects.create(
            user=user,
            post=post
        )
        return redirect('posts')

# View to comment on post
@login_required(login_url="login")
def commentPost(request, id):
    post = Post.objects.get(id=id)
    context = {'post': post, 'comment': True}

    if post.no_of_comments > 0:
        comments = Comment.objects.filter(post=post)
        context['comments'] = comments

    if request.method == 'POST':
        message = request.POST.get('comment')
        print("Message", message)
        
        user = User.objects.get(username=request.user)
        
        Comment.objects.create(
            user=user,
            post=post,
            message=message
        )

        post.no_of_comments += 1
        post.save()

        return redirect("post", post.id)
        
    return render(request, 'posts/post.html', context)

# View to create post
@login_required(login_url="login")
def createPost(request): 
    form = PostForm()

    if request.method == "POST":
        content = request.POST.get('content')

        try:
            user = User.objects.get(username=request.user)
        except:
            messages.error('Not allowed')

        Post.objects.create(
            user=user,
            content=content
        )

        return redirect('posts')

    context = {'form': form}
    return render(request, 'posts/create-post.html', context)

# View to register a user
def registerUser(request):
    form = UserRegistrationForm()

    if request.method == 'POST': 
        form = UserRegistrationForm(request.POST)

        if form.is_valid(): 
            user = form.save(commit=False)
            user.email = user.email.lower()
            user.save()
            return redirect('login')
        
        else: 
            for field, errors in form.errors.items():
                for error in errors:
                    print(f"Error for {field}: {error}")
                    messages.error(request, error)

    context = {'form': form}
    return render(request, 'posts/register.html', context)

# View to login a user
def loginUser(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exist')
        
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('posts')
        else: 
            messages.error(request, 'Invalid creadentials')

    return render(request, 'posts/login.html')

@login_required(login_url="login")
def logoutUser(request):
    logout(request)
    print('logout')
    return redirect('posts')

# To view liked posts
@login_required(login_url="login")
def likedPosts(request, id):
    liked = Like.objects.filter(user=request.user)
    context = {'liked': liked}
    return render(request, 'posts/liked.html', context)

# To view commented posts
@login_required(login_url="login")
def commentedPosts(request, id):
    commented = Comment.objects.filter(user=request.user)
    context = {'commented': commented}
    return render(request, 'posts/liked.html', context)

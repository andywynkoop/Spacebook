# Spacebook

[Live Link](https://space--book.herokuapp.com)

[Design Documents](https://github.com/andywynkoop/fb_inspired_site/wiki)

![Profile](http://res.cloudinary.com/dmynah8jz/image/upload/v1523655949/Screen_Shot_2018-04-13_at_2.45.26_PM.png)

Spacebook is a social media web application that allows users to connect with a network of friends and share stories and updates about their daily lives.

Spacebook is designed as a lightweight alternative to it's popular competitor, facebook. It implements many of the same core features and design to provide a smooth and familiar user experience.

## Features

### Authentication - Profile Creation and Sign In

![Landing Page](http://res.cloudinary.com/dmynah8jz/image/upload/v1523651528/Screen_Shot_2018-04-13_at_1.28.25_PM.png)

When visiting spacebook for the first time, you'll be directed to a sign up page where you can create a new account. If you already have an account, you can log in using the form in the navigation bar. If you don't want to create an account right now, you can click on the purple button in the bottom left of the screen and sign in as a demo user.

Both the log in and sign up forms validate that you've entered all of the fields, and will display an error message modal with information about the error. Invalid fields on the sign up page will be hightlighted with a red border.

Logging In:

![Log In Errors](http://res.cloudinary.com/dmynah8jz/image/upload/v1523651528/Screen_Shot_2018-04-13_at_1.29.29_PM.png)

Signing Up:

![Sign Up Errors](http://res.cloudinary.com/dmynah8jz/image/upload/v1523651528/Screen_Shot_2018-04-13_at_1.30.43_PM.png)

### Main Navigation Bar

![MainNav](http://res.cloudinary.com/dmynah8jz/image/upload/v1523653959/Screen_Shot_2018-04-13_at_2.06.31_PM.png)

This navigation bar will be visible on all pages once you're signed in.
You can use it to navigate between profile pages and your news feed.

##### Search

The search bar allows you to lookup existing users of the site that you haven't connected with yet. Type in a query and click on a user's name or picture to visit their page and send a friend request!

Your name in the navbar is a link to your own profile page.

##### Friend Requests

![FriendRequest](http://res.cloudinary.com/dmynah8jz/image/upload/v1523653156/Screen_Shot_2018-04-13_at_1.57.58_PM.png)

Click on the person-shaped icon to view all pending friend requests from other users and either approve or deny them. Once you accept a request, you can write on that user's wall and comment on their posts.

##### Logging Out

![FriendRequest](http://res.cloudinary.com/dmynah8jz/image/upload/v1523654131/Screen_Shot_2018-04-13_at_2.15.11_PM.png)

The dropdown icon on the far-right of the navigation bar includes a link to sign out of your account.

### News Feed

![Newsfeed](http://res.cloudinary.com/dmynah8jz/image/upload/v1523653404/Screen_Shot_2018-04-13_at_2.02.57_PM.png)

Upon successful login, you will be redirected to your news feed. This page will show all posts affiliated with you or any of your friends. You can create a new post from this page, and also edit or comment on existing posts. The left sidebar contains links to other pages on the site, and the right sidebar contains links and previews of recent news stories.

Trending news story results are provided by [NewsApi](https://newsapi.org/)

![TrendHover](http://res.cloudinary.com/dmynah8jz/image/upload/v1523653155/Screen_Shot_2018-04-13_at_1.50.10_PM.png)

##### Post Form

![PostForm](http://res.cloudinary.com/dmynah8jz/image/upload/v1523654783/Screen_Shot_2018-04-13_at_2.26.00_PM.png)

Enter some text in the form and either press 'enter' or click the 'post' button to create a post on your own profile from the news feed. When you visit a friend's page and fill out this form, your post will be saved to their wall instead.

##### Posts

![Post1](http://res.cloudinary.com/dmynah8jz/image/upload/v1523653155/Screen_Shot_2018-04-13_at_1.52.06_PM.png)

Posts from all of your friends will appear on your news feed, along with a form to leave a comment!

![Post2](http://res.cloudinary.com/dmynah8jz/image/upload/v1523655507/Screen_Shot_2018-04-13_at_2.38.12_PM.png)

Posts between your friends and other users will appear as well, along with any comments on those posts.

### Profile Pages

![Profile](http://res.cloudinary.com/dmynah8jz/image/upload/v1523655949/Screen_Shot_2018-04-13_at_2.45.26_PM.png)

Users can have a profile picture and cover photo to customize their page (image upload not supported as of latest version :( ).
When viewing a friend's profile, you have the option to leave a post on their page via the same post form

##### Friends List

![Friends](http://res.cloudinary.com/dmynah8jz/image/upload/v1523656286/Screen_Shot_2018-04-13_at_2.50.56_PM.png)

From a user's profile page, you can view that user's friends and navigate to any of their pages by clicking their picture.

## Technologies Used

Spacebook is built using Rails 5, PostgreSQL, and React with Redux.

## Coming Soon

* Likes - Users can like posts and comments
* Comment comments - Users can reply directly to a comment (nested)
* Image Upload and Hosting - Users can upload their own photos as their profile picture or cover photo
* Post Images - Users can add photos to their posts
* Post/Comment Tags - Users can tag other users in a post
* Notifications - Users can view recent activity from their friends in the relevant navbar menu
* Chat - Users can chat with multiple other users - implement live chat feature using action cable
* Profile customization settings - Users can change details about themselves such as birthday, bio, gender, relationship status, etc.

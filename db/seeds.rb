require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
FriendRequest.destroy_all
Friendship.destroy_all

def seed_users_and_photos
  User.destroy_all
  andy = User.create(
  firstname: "Andy",
  lastname: "Wynkoop",
  email: "demo_user@email.com",
  password: "password",
  user_url: "AndyWynkoop",
  bio: "I am the demo",
  birthday: Date.parse("28-04-1992"),
  sex: "Male"
  )

  jesse = User.create(
    firstname: "Jesse",
    lastname: "Wong",
    email: "jesse@email.com",
    password: "password",
    user_url: "JesseWong",
    bio: "Well Hoooowwwwwdy",
    birthday: Date.parse("15-07-1994"),
    sex: "Male"
  )

  trevor = User.create(
  firstname: "Trevor",
  lastname: "Uptain",
  email: "trevor@email.com",
  password: "password",
  user_url: "Tuptain",
  bio: "Today is not that day",
  birthday: Date.parse("09-07-1994"),
  sex: "Male"
  )

  danny = User.create(
  firstname: "Danny",
  lastname: "Peng",
  email: "danny@email.com",
  password: "password",
  user_url: "DannyWPeng",
  bio: "Keep your logic above your sentiments. Or else you're headed for regrets.",
  birthday: Date.parse("09-04-1989"),
  sex: "Male"
  )

  nima = User.create(
  firstname: "Nima",
  lastname: "Partovi",
  email: "nima@email.com",
  password: "password",
  user_url: "NimaPartovi",
  bio: "I'm just a 2D boy living in a 3D world",
  birthday: Date.parse("04-05-1919"),
  sex: "Male"
  )

  annie = User.create(
  firstname: "Annie",
  lastname: "Gu",
  email: "annie@email.com",
  password: "password",
  user_url: "AnnieGu",
  bio: "I'll get back to you",
  birthday: Date.parse("04-01-1995"),
  sex: "Female"
  )

  jennifer = User.create(
    firstname: "Jennifer",
    lastname: "Kennedy",
    email: "jen@email.com",
    password: "password",
    user_url: "JenKen",
    bio: "Hello world",
    birthday: Date.parse("01-01-1994"),
    sex: "Female"
  )

  alyson = User.create(
    firstname: "Alyson",
    lastname: "Irvine",
    email: "alyson@email.com",
    password: "password",
    user_url: "AIrvine",
    bio: "I can't think of a creative bio",
    birthday: Date.parse("02-01-1990"),
    sex: "Female"
  )

  ashley = User.create(
    firstname: "Ashley",
    lastname: "Halkett",
    email: "ashley@email.com",
    password: "password",
    user_url: "AshleyH",
    bio: "Ohhhh baby",
    birthday: Date.parse("19-04-1990"),
    sex: "Female"
  )

  bubba = User.create(
    firstname: "Bubba",
    lastname: "Baas",
    email: "bubba@email.com",
    password: "password",
    user_url: "BradleyBaas",
    bio: "Oh yeah",
    birthday: Date.parse("15-07-1990"),
    sex: "Male"
  )

  franka = User.create(
    firstname: "Franka",
    lastname: "Eric",
    email: "franka@email.com",
    password: "password",
    user_url: "frankafranks",
    bio: "I'm like a sea otter at midnight",
    birthday: Date.parse("08-04-1991"),
    sex: "Male"
  )

  jerry = User.create(
    firstname: "Jerry",
    lastname: "Garcia",
    email: "jerry@email.com",
    password: "password",
    user_url: "JerryGarcia",
    bio: "Constantly choosing the lesser of two evils is still choosing evil.",
    birthday: Date.parse("01-08-1942"),
    sex: "Male"
  )

  jo = User.create(
    firstname: "Jo",
    lastname: "Gotthardt",
    email: "jogotthardt@email.com",
    password: "password",
    user_url: "Jo",
    bio: "I like turtles",
    birthday: Date.parse("09-07-1992"),
    sex: "Female"
  )

  joey = User.create(
    firstname: "Joey",
    lastname: "Trinidad",
    email: "joey@email.com",
    password: "password",
    user_url: "JoeyTrinidad",
    bio: "Shoot the wolf closest to your sled",
    birthday: Date.parse("14-10-1992"),
    sex: "Male"
  )

  matt = User.create(
    firstname: "Matt",
    lastname: "Wipper",
    email: "mwips@email.com",
    password: "password",
    user_url: "Wipper",
    bio: "Hi I'm Matt Wipper",
    birthday: Date.parse("14-10-1993"),
    sex: "Male"
  )

  nick = User.create(
    firstname: "Nick",
    lastname: "Welch",
    email: "nick@email.com",
    password: "password",
    user_url: "NickWelch",
    bio: "All specs passing",
    birthday: Date.parse("19-12-1992"),
    sex: "Male"
  )

  raenee = User.create(
    firstname: "Raenee",
    lastname: "Harig",
    email: "rainy@email.com",
    password: "password",
    user_url: "NaeNae",
    bio: "I have a fishing license",
    birthday: Date.parse("20-12-1992"),
    sex: "Female"
  )

  sarah = User.create(
    firstname: "Sarah",
    lastname: "Naas",
    email: "sarah@email.com",
    password: "password",
    user_url: "Snaas",
    bio: "N/A",
    birthday: Date.parse("14-03-1991"),
    sex: "Female"
  )

  scott = User.create(
    firstname: "Scott",
    lastname: "Labonte",
    email: "scott@email.com",
    password: "password",
    user_url: "guest-user",
    bio: "<REDACTED>",
    birthday: Date.parse("06-06-1991"),
    sex: "Male"
  )

  vell = User.create(
    firstname: "Vell",
    lastname: "Boyland",
    email: "vell@email.com",
    password: "password",
    user_url: "Vellvell",
    bio: "N/A",
    birthday: Date.parse("19-01-1988"),
    sex: "Female"
  )

  warren = User.create(
    firstname: "Warren",
    lastname: "Black",
    email: "warren@email.com",
    password: "password",
    user_url: "Blackmagic",
    bio: "That's not going to cut the mustard",
    birthday: Date.parse("03-08-1992"),
    sex: "Male"
  )



  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/andy-photo.png');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/andy-cover.jpg')
  andy.profile_photo.attach(io: profile, filename: "andy-photo")
  andy.cover_photo.attach(io: cover, filename: "andy-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jesse-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jesse-cover.jpg')
  jesse.profile_photo.attach(io: profile, filename: "jesse-photo")
  jesse.cover_photo.attach(io: cover, filename: "jesse-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jen-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jen-cover.jpg')
  jennifer.profile_photo.attach(io: profile, filename: "jen-photo")
  jennifer.cover_photo.attach(io: cover, filename: "jen-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/trevor-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/trevor-cover.png')
  trevor.profile_photo.attach(io: profile, filename: "trevor-photo")
  trevor.cover_photo.attach(io: cover, filename: "trevor-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/annie-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/annie-cover.jpg')
  annie.profile_photo.attach(io: profile, filename: "annie-photo")
  annie.cover_photo.attach(io: cover, filename: "annie-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/nima-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/nima-cover.jpg')
  nima.profile_photo.attach(io: profile, filename: "nima-photo")
  nima.cover_photo.attach(io: cover, filename: "nima-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/danny-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/danny-cover.jpg')
  danny.profile_photo.attach(io: profile, filename: "danny-photo")
  danny.cover_photo.attach(io: cover, filename: "danny-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/alyson-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/alyson-cover.jpg')
  alyson.profile_photo.attach(io: profile, filename: "alyson-photo")
  alyson.cover_photo.attach(io: cover, filename: "alyson-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/ashley-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/ashley-cover.jpg')
  ashley.profile_photo.attach(io: profile, filename: "ashley-photo")
  ashley.cover_photo.attach(io: cover, filename: "ashley-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/bubba-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/bubba-cover.jpg')
  bubba.profile_photo.attach(io: profile, filename: "bubba-photo")
  bubba.cover_photo.attach(io: cover, filename: "bubba-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/franka-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/franka-cover.jpg')
  franka.profile_photo.attach(io: profile, filename: "franka-photo")
  franka.cover_photo.attach(io: cover, filename: "franka-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jerry-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jerry-cover.jpg')
  jerry.profile_photo.attach(io: profile, filename: "jerry-photo")
  jerry.cover_photo.attach(io: cover, filename: "jerry-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jo-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jo.jpg')
  jo.profile_photo.attach(io: profile, filename: "jo-photo")
  jo.cover_photo.attach(io: cover, filename: "jo-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/joey-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/joey-cover.jpg')
  joey.profile_photo.attach(io: profile, filename: "joey-photo")
  joey.cover_photo.attach(io: cover, filename: "joey-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/matt-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/matt-cover.jpg')
  matt.profile_photo.attach(io: profile, filename: "matt-photo")
  matt.cover_photo.attach(io: cover, filename: "matt-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/nick-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/nick-cover.jpg')
  nick.profile_photo.attach(io: profile, filename: "nick-photo")
  nick.cover_photo.attach(io: cover, filename: "nick-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/raenee-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/raenee-cover.jpg')
  raenee.profile_photo.attach(io: profile, filename: "raenee-photo")
  raenee.cover_photo.attach(io: cover, filename: "raenee-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/sarah-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/sarah-cover.jpg')
  sarah.profile_photo.attach(io: profile, filename: "sarah-photo")
  sarah.cover_photo.attach(io: cover, filename: "sarah-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/scott-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/scott-cover.jpg')
  scott.profile_photo.attach(io: profile, filename: "scott-photo")
  scott.cover_photo.attach(io: cover, filename: "scott-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/vell-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/vell-cover.jpg')
  vell.profile_photo.attach(io: profile, filename: "vell-photo")
  vell.cover_photo.attach(io: cover, filename: "vell-cover")

  profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/warren-photo.jpg');
  cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/warren-cover.jpg')
  warren.profile_photo.attach(io: profile, filename: "warren-photo")
  warren.cover_photo.attach(io: cover, filename: "warren-cover")
end


# comment in to run above:
seed_users_and_photos

User.all.map do |user|
  define_method(user.firstname.downcase) do
    user
  end
end

def create_two_way_friendship(requestor, requestee)
  Friendship.create(requestor: requestor, requestee: requestee)
  Friendship.create(requestor: requestee, requestee: requestor)
end

create_two_way_friendship(andy, jennifer)
create_two_way_friendship(andy, jesse)
create_two_way_friendship(andy, trevor)
create_two_way_friendship(andy, franka)
create_two_way_friendship(andy, warren)
create_two_way_friendship(andy, ashley)
create_two_way_friendship(andy, vell)
create_two_way_friendship(andy, matt)
create_two_way_friendship(andy, jerry)
create_two_way_friendship(jesse, trevor)
create_two_way_friendship(jesse, nick)
create_two_way_friendship(jesse, annie)
create_two_way_friendship(jesse, jennifer)
create_two_way_friendship(nima, trevor)
create_two_way_friendship(nick, annie)
create_two_way_friendship(nick, nima)
create_two_way_friendship(nick, trevor)
create_two_way_friendship(nick, jennifer)
create_two_way_friendship(nima, trevor)
create_two_way_friendship(annie, trevor)
create_two_way_friendship(jennifer, trevor)
create_two_way_friendship(franka, warren)
create_two_way_friendship(franka, bubba)
create_two_way_friendship(franka, matt)
create_two_way_friendship(franka, raenee)
create_two_way_friendship(warren, raenee)
create_two_way_friendship(warren, matt)
create_two_way_friendship(warren, bubba)
create_two_way_friendship(warren, jennifer)
create_two_way_friendship(warren, jesse)
create_two_way_friendship(warren, nick)
create_two_way_friendship(bubba, raenee)
create_two_way_friendship(bubba, matt)
create_two_way_friendship(bubba, scott)
create_two_way_friendship(scott, jesse)
create_two_way_friendship(scott, jerry)

FriendRequest.create(requestor: danny, requestee: andy)
FriendRequest.create(requestor: nima, requestee: andy)
FriendRequest.create(requestor: raenee, requestee: andy)
FriendRequest.create(requestor: annie, requestee: andy)
FriendRequest.create(requestor: andy, requestee: sarah)
FriendRequest.create(requestor: andy, requestee: jo)

p1 = Post.create(author: andy, wall: andy, body: "You need to shoot the wolf that's closest to your sled")
Comment.create(author: jesse, post: p1, body: "You betcha")
p2 = Post.create(author: raenee, wall: franka, body: "Hey what are you doing today?")
Comment.create(author: franka, post: p2, body: "Just hanging out, you?")
p3 = Post.create(author: raenee, wall: warren, body: "Don't you just love React?")
Comment.create(author: warren, post: p2, body: "Yes")
Post.create(author: danny, wall: danny, body: "Keep your logic above your sentiments. Or else you're headed for regrets.")
Post.create(author: andy, wall: ashley, body: "Hey!")
Post.create(author: ashley, wall: andy, body: "Hey!")
Post.create(author: vell, wall: sarah, body: "Do you work tonight? Let's go for a drink!")
Post.create(author: warren, wall: bubba, body: "Isn't this site awesome???!!?")
Post.create(author: trevor, wall: jesse, body: "On a scale of 1-10, how much do you love Ruby on Rails?")
Post.create(author: jesse, wall: trevor, body: "I think you're pretty good at CSS")
Post.create(author: jennifer, wall: jesse, body: "Do you have the lecture notes from today?")
Post.create(author: jerry, wall: jerry, body: "Inspiration, move me brightly.")
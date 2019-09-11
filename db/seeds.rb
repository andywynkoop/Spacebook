require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Friendship.destroy_all
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
 firstname: "Danny W.",
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

jen = User.create(
  firstname: "Jennifer",
  lastname: "Kennedy",
  email: "jen@email.com",
  password: "password",
  user_url: "JenKen",
  bio: "Hello world",
  birthday: Date.parse("01-01-1994"),
  sex: "Female"
)

profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/andy-photo.png');
cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/andy-cover.png')
andy.profile_photo.attach(io: profile, filename: "andy-photo")
andy.cover_photo.attach(io: cover, filename: "andy-cover")

profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jesse-photo.jpg');
cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jesse-cover.jpg')
jesse.profile_photo.attach(io: profile, filename: "jesse-photo")
jesse.cover_photo.attach(io: cover, filename: "jesse-cover")

profile = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jen-photo.jpg');
cover = open('https://spacebook-assets.s3-us-west-1.amazonaws.com/seeds/jen-cover.jpg')
jen.profile_photo.attach(io: profile, filename: "jen-photo")
jen.cover_photo.attach(io: cover, filename: "jen-cover")

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

Friendship.create(requested_user: andy, requesting_user: danny, approved: true)
Friendship.create(requested_user: jen, requesting_user: andy, approved: true)
Friendship.create(requested_user: andy, requesting_user: danny, approved: true)
Friendship.create(requested_user: andy, requesting_user: jesse, approved: true)
Friendship.create(requested_user: andy, requesting_user: trevor, approved: true)
Friendship.create(requested_user: jesse, requesting_user: trevor, approved: true)
Friendship.create(requested_user: nima, requesting_user: trevor, approved: true)
Friendship.create(requested_user: annie, requesting_user: trevor, approved: true)
Friendship.create(requested_user: jen, requesting_user: trevor, approved: true)
Friendship.create(requested_user: jen, requesting_user: jesse, approved: true)
Friendship.create(requested_user: jesse, requesting_user: annie, approved: true)
Friendship.create(requested_user: andy, requesting_user: annie, approved: false)
Friendship.create(requested_user: andy, requesting_user: nima, approved: false)
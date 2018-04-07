# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(firstname: "Andy", email: "demo_user@email.com", lastname: "Wynkoop", password: "password", profile_img_url: "http://res.cloudinary.com/dmynah8jz/image/upload/v1523080236/andyprofile.jpg", cover_photo_url: "http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_1254/v1523082791/20151109_155823.jpg")

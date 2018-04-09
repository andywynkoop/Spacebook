# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
firstname: "Andy",
lastname: "Wynkoop",
email: "demo_user@email.com",
created_at: Thu, 05 Apr 2018 16:50:50 UTC +00:00,
updated_at: Mon, 09 Apr 2018 03:04:05 UTC +00:00,
user_url: "AndyWynkoop",
profile_img_url:
 "http://res.cloudinary.com/dmynah8jz/image/upload/v1523080236/andyprofile.jpg",
cover_photo_url:
 "http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_1254/v1523082791/20151109_155823.jpg",
bio: "Software engineer working in San Francisco, CA.",
birthday: Tue, 28 Apr 1992 07:00:00 UTC +00:00,
sex: "Male">
)

User.create(
 firstname: "Jerry",
 lastname: "Garcia",
 email: "jerry@email.com",
 password: "password",
 created_at: Sun, 08 Apr 2018 21:46:22 UTC +00:00,
 updated_at: Mon, 09 Apr 2018 02:01:25 UTC +00:00,
 user_url: "JerryGarcia",
 profile_img_url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Jerry-Garcia-01.jpg",
 cover_photo_url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Grateful_Dead_%289139238416%29.jpg",
 bio: nil,
 birthday: Wed, 04 Feb 1953 08:00:00 UTC +00:00,
 sex: "Male">
)

User.create(
 firstname: "Jerry",
 lastname: "Garcia",
 email: "jerry@email.com",
 password: "password",
 created_at: Sun, 08 Apr 2018 21:46:22 UTC +00:00,
 updated_at: Mon, 09 Apr 2018 02:01:25 UTC +00:00,
 user_url: "JerryGarcia",
 profile_img_url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Jerry-Garcia-01.jpg",
 cover_photo_url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Grateful_Dead_%289139238416%29.jpg",
 bio: nil,
 birthday: Wed, 04 Feb 1953 08:00:00 UTC +00:00,
 sex: "Male">
)

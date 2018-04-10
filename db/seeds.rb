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
user_url: "AndyWynkoop",
profile_img_url:
 "http://res.cloudinary.com/dmynah8jz/image/upload/v1523080236/andyprofile.jpg",
cover_photo_url:
 "http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_1254/v1523082791/20151109_155823.jpg",
bio: "Software engineer working in San Francisco, CA.",
sex: "Male"
)

User.create(
 firstname: "Jerry",
 lastname: "Garcia",
 email: "jerry@email.com",
 password: "password",
 user_url: "JerryGarcia",
 profile_img_url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Jerry-Garcia-01.jpg",
 cover_photo_url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Grateful_Dead_%289139238416%29.jpg",
 bio: nil,
 sex: "Male"
)

User.create(
 firstname: "Jerry",
 lastname: "Garcia",
 email: "jerry@email.com",
 password: "password",
 user_url: "JerryGarcia",
 profile_img_url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Jerry-Garcia-01.jpg",
 cover_photo_url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Grateful_Dead_%289139238416%29.jpg",
 bio: nil,
 sex: "Male"
)

User.create(
 firstname: "Danny W.",
 lastname: "Peng",
 email: "danny@email.com",
 password: "password",
 user_url: "DannyWPeng",
 profile_img_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/19748628_10105116560528514_928545978395585021_n.jpg?_nc_cat=0&oh=4300167ae91a3dbb0e9d59cacc387c50&oe=5B5C4ABD",
 cover_photo_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/19732187_10105116555104384_5365679968007041198_n.jpg?_nc_cat=0&oh=7610a6e845d1fb2020cd25492ce5f340&oe=5B288001",
 bio: "Keep your logic above your sentiments. Or else you're headed for regrets.",
 sex: "Male"
)

User.create(
 firstname: "Lex",
 lastname: "Savramis",
 email: "lex@email.com",
 password: "password",
 user_url: "LexSavramis",
 profile_img_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/20768110_10212617292941704_3159586047364940712_n.jpg?_nc_cat=0&oh=f3aa038e051fa81b1f005356b9a4fdee&oe=5B71D66D",
 cover_photo_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10625068_10204092899357192_8493302648326451673_n.jpg?_nc_cat=0&oh=0b479f1414a428164f07bbbb88f66f4e&oe=5B654792",
 bio: "Dreamer. Visionary. Artist",
 sex: "Female"
)

User.create(
 firstname: "Yair",
 lastname: "Levi",
 email: "yair@email.com",
 password: "password",
 user_url: "YairLevi",
 profile_img_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-1/c90.1.1507.1507/1540444_10152757531844626_4986869029706754556_o.jpg?_nc_cat=0&oh=559ef82831fcdf6a9f05542866421856&oe=5B5E1416",
 cover_photo_url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/396226_10150619821354626_1958628994_n.jpg?_nc_cat=0&oh=2167e83cb469c053c711e0c3fdf8d2bf&oe=5B711CD0",
 bio: "Challenge Accepted.",
 sex: "Male"
)

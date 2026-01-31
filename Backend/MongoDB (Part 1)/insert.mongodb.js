show collections

use college

db.student.insertOne({ name: "adam", age: 23, marks: 92 })
db.student.insertOne({ name: "bob", age: 20, marks: 82 })
db.student.insertOne({ name: "jack", city: "Dhaka", marks: 82 })

db.student.insertMany([{ name: "joo", marks: 89, city: "Dhaka" }, { name: "koi", marks: 98, city: "Rajshahi" }])

db.student.find()


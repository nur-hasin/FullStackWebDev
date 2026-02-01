db.student.updateOne({ name: "adam" }, { $set: { marks: 99 } })
db.student.updateMany({ city: "Dhaka" }, { $set: { city: "Sylhet" } })
db.student.replaceOne({ name: "bob" }, { name: "luka", age: 19, marks: 85 }) 

db.student.find()


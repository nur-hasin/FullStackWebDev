db.student.find()

db.student.find({ city: "Dhaka" })
db.student.findOne({ marks: 82 })
db.student.find({ city: "Dhaka", marks: 82 })

db.student.find({ marks: { $gt: 90 } })
db.student.find({ marks: { $lte: 85 } })
db.student.find({ city: { $in: ["Dhaka", "Rajshahi"] } })
db.student.find({ $or: [{ marks: { $eq: 92 } }, { city: "Dhaka" }] })
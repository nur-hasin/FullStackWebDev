db.student.deleteOne({ age: 19 })
db.student.deleteMany({ city: { $in: ['Sylhet', 'Rajshahi'] } })

db.student.deleteOne({})
db.student.deleteMany({})

db.dropDatabase()
show dbs
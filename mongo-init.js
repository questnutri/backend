db = db.getSiblingDB("admin")
db.createUser({
    user: "root",
    pwd: "root",
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
})

db.auth("root", "root")

db = db.getSiblingDB("QuestNutriDB")
db.createUser({
    user: "root",
    pwd: "root",
    roles: [{ role: "readWrite", db: "QuestNutriDB" }]
})

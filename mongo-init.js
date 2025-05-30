db = db.getSiblingDB("admin");

db.createUser({
    user: "root",
    pwd: "root",
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" },
        { role: "dbAdminAnyDatabase", db: "admin" }
    ]
});

db.auth("root", "root");

db = db.getSiblingDB("QuestNutriDB");

db.createCollection("users");

db.users.insertOne({
    name: "Admin",
    email: "admin",
    password: "$2a$12$vmXr/TIeRsUBHZNdgxshiuLZBY1C2URUz1m8mCzuz.zunL1F3aLpi",
    role: "admin"
});

db = db.getSiblingDB("admin");
db.system.version.insertOne({ _id: "init_flag", initializedAt: new Date() });
